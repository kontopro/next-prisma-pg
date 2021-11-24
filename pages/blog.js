import styles from '../styles/Blog.module.css'
import prisma from '../lib/prisma'
import Link from 'next/link'

export default function Blog({ allPosts }) {

  // const { data:session }  = useSession()
  // console.log(allPosts)
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
 
  const allPosts = await prisma.post.findMany({
    select: {
      title: true,
      author: true,
      id: true
    },
  });
  
  return {
    props: {
      allPosts,
    },
  }
}