import prisma from "../../lib/prisma";
import DOMPurify from 'isomorphic-dompurify'

export default function showPost( {post,postContent} )  {

    // const showContent = postContent
    console.log(postContent)
    return (
        <div className="post-wrapper">
            <p>post-wrapper</p>
            <h1>{post.title}</h1>
            <article>{postContent.map(
                                      b => <div key={b.id}>
                                                        {b.attr==='p'?<p>{b.content}</p>:
                                                        b.attr==='img'?<img src={`${b.content}`} />:
                                                        b.attr==='h1'?<h1>{b.content}</h1>:
                                                        b.attr==='h2'?<h2>{b.content}</h2>:
                                                        ``
                                                        }
                                            </div>)}
            </article>
        </div>
    )
}

export async function getStaticProps( {params} ) {
 
    const post = await prisma.post.findUnique({
      select:   {
        title: true,
        author: true,
        id: true,
      },
      where:    {
        id: parseInt(params.pid),
      }
    });    
     
    const postContent = await prisma.content.findMany({
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