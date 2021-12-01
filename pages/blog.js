import styles from '../styles/Blog.module.css'
import PostCard from '../components/PostCard'

export default function Blog( {allPosts} ) {
        
  return (        
          <main className={styles.main}>
            <div className={styles.title}>
              <h1>These are my posts</h1>
            </div> 
            <ul className={styles.blog}>
              {allPosts.map((post) => (
                <PostCard key={post.id} post={post}/>
                )
                )
              }
            </ul>                          
          </main>
    )
}

export async function getStaticProps() {
 
    const resp = await fetch('http://localhost:3000/api/insgetPost');
    const allPosts = await resp.json();
    return {
      props: {
        allPosts,
      },
  }
}