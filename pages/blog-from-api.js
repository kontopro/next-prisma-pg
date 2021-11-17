import styles from '../styles/Blog.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Blog( {allPosts} ) {

  // const { data:session }  = useSession()
        
  return (
        
          <main className={styles.main}>
            <h1 className={styles.title}>
              List of posts
            </h1> 
            <ul>
              {allPosts.map((post) => (
                <li key={post.id}><Link href={`/post/${post.id}`}><a>{post.title}</a></Link></li>)
                )
              }
            </ul>     
                     
          </main>
    )
}

export async function getStaticProps() {
 
//  const allPosts = await prisma.post.findMany();
    const res = await fetch('http://localhost:3000/api/insgetPost');
    const allPosts = await res.json();

  return {
    props: {
      allPosts,
    },
  }
}