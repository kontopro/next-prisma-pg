import styles from '../styles/Menu.module.css'
import Link  from "next/link";

export default function Menu()  {
    
    return(
        <div className={styles.header}>
            <div className={styles.mheader}>
                <Link className="mlink" href="/"><a>Home</a></Link>
                <Link className="mlink" href="/page_one"><a>Page_one</a></Link>
                <Link className="mlink" href="/page_two">Page_two</Link>
                <Link className="mlink" href="/blog"><a>Blog</a></Link>
                <Link className="mlink" href="/blog-from-api"><a>Blog-2</a></Link>
                <Link className="mlink" href="/newPost"><a>create-post</a></Link>
            </div>
        </div>
    )
}