import Link  from "next/link";
import styles from '../styles/PostCard.module.css'

export default function PostCard({post})  {    

  const pat = new Date(post.publishedAt);
  
  return(
        <div className={styles.postCard}>
                  <div className={styles.fimage}><img src={`${post.fimage}`} alt='wtf'/></div>
                  <div className={styles.title}>
                    <Link href={`/post/${post.id}`}>
                      <a><h2>{post.title}</h2></a>
                    </Link>
                  </div>
                  <div className={styles.published}><p>{`by ${post.author.displayName} (${pat.getDate()}-${pat.getMonth()+1}-${pat.getFullYear()})`}</p></div>
                  <div className={styles.intro}><p>{post.intro}</p></div>
                  <div className={styles.more}>
                    <Link href={`/post/${post.id}`}><a>read more&nbsp; &#x2192;</a></Link>
                  </div>
        </div>
  )
}