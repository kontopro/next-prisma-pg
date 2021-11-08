import Head from 'next/head'
import styles from '../styles/Blog.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { PrismaClient } from '.prisma/client'

export default function Blog({ allPosts }) {

  const { data:session }  = useSession()
        
  return (
        
      
          <main className={styles.main}>
            <h1 className={styles.title}>
              List of posts
            </h1> 
            <ul>
              {allPosts.map((post) => (
                <li key={post.id}>{post.title}</li>)
                )
              }
    </ul>     
                     
          </main>
    )
}

export async function getStaticProps() {
 
  const prisma = new PrismaClient();  

  const allPosts = await prisma.post.findMany();
  
  return {
    props: {
      allPosts,
    },
  }
}