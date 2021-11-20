import prisma from "../../lib/prisma";
import DOMPurify from 'isomorphic-dompurify'

export default function showPost( {post,pars} )  {

    // const blogContent = pars
    console.log(pars)
    return (
        <div className="post-wrapper">
            <p>post-wrapper</p>
            <h1>{post.title}</h1>
            {/* <div>{blogContent}</div> */}
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
    const pars = await prisma.paragraph.findMany({
      select:   {
        sorder: true,
        content: true,
      },
      where:    {
        postId: parseInt(params.pid),
      }
    });    
    const heads = await prisma.heading.findMany({
      select:   {
        importance: true,
        sorder: true,
        content: true,
      },
      where:    {
        postId: parseInt(params.pid),
      }
    });    
    return {
      props: {
        post,
        pars,
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