import prisma from "../../lib/prisma";
import PostElement from "../../components/PostElement";
import styles from "../../styles/SinglePost.module.css";

export default function showPost( {post,postContent} )  {

    return (
        <div className={styles.postWrapper}>
            <h1 className={styles.postTitle}>{post.title}.</h1>
            <p className={styles.postIntro}>{post.intro}</p>
            <p className={styles.postBy}>by {post.author.name}</p>            
            <article className={styles.postArticle}>
              {postContent.map(b => 
                                    <div key={b.id} className={styles.postElem}>
                                      <PostElement el={b.attr} cont={b.content} />
                                    </div>)
                      }
            </article>
            <p>end of post wrapper</p>
        </div>
    )
}

export async function getStaticProps( {params} ) {
 
    const post = await prisma.post.findUnique({
      select:   {
        title: true,
        author: true,
        slug: true,
        intro: true,
        fimage: true,
        id: true,
      },
      where:    {
        id: parseInt(params.pid),
      }
    });    
     
    const postContent = await prisma.element.findMany({
      select:   {
        id: true,
        importance: true,
        sorder: true,
        content: true,
        attr: true,
      },
      where:    {
        postId: parseInt(params.pid),
      },
      orderBy:  {
        sorder: 'asc'
      }
    });    
    return {
      props: {
        post,
        postContent,
      },
      revalidate: 10
    }
}

export async function getStaticPaths() {    
    // Πάρε τα id
    const allPosts = await prisma.post.findMany({
        select: {
          id: true
        },
      });  
    // Δημιούργησε paths για καθε id
    const paths = allPosts.map((post) => ({
      params: { pid: post.id.toString() },
    }))  
    // Αν δεν υπάρχει το id δώσε 404
    return { paths, fallback: false }
}