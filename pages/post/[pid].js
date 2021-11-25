import prisma from "../../lib/prisma";
import PostElement from "../../components/PostElement";

export default function showPost( {post,postContent} )  {

    return (
        <div className="post-wrapper">
            <p>post-wrapper</p>
            <h1>{post.title}</h1>
            <p>{post.intro}</p>
            <p>by {post.author.name}</p>            
            <article>
              {postContent.map(b => 
                                    <div key={b.id}>
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