import Link  from "next/link";
import styles from '../styles/PostCard.module.css'

export default function PostCard({post})  {
    
    return(
        <div className={styles.postCard}>
                  <div className={styles.fimage}><img src={`${post.fimage}`} /></div>
                  <div>{post.title}</div>
                  <div><p>{post.intro}</p></div>
                  <div>
                    <Link href={`/post/${post.id}`}><a>read more...</a></Link>
                  </div>
        </div>
    )
}