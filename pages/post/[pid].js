import prisma from "../../lib/prisma";

export default function showPost( {post} )  {

    return (
        <div className="post-wrapper">
            <h1>{post.title}</h1>
        <p>post-wrapper</p>
        </div>
    )

}

export async function getStaticProps( {params} ) {
 
    const post = await prisma.post.findUnique({
      select:   {
        title: true,
        author: true,
        id: true,
        content: true,
      },
      where:    {
        id: parseInt(params.pid),

      }
    });
    
    return {
      props: {
        post,
      },
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