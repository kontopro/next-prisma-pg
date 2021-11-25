import styles from '../styles/Menu.module.css'
import Link  from "next/link";
import { useRouter } from 'next/router'

export default function Menu()  {
    
    const router=useRouter()
    console.log(router.asPath)

    return(
        <div className={styles.header}>
            <nav className={styles.mheader}>
                <ul>
                    <li className={router.asPath==='/' && styles.active} ><Link className="mlink" href="/"><a>Home</a></Link></li>                    
                    <li className={router.asPath==='/page_one' && styles.active}><Link className="mlink" href="/page_one"><a>Page_one</a></Link></li>
                    <li className={router.asPath==='/page_two' && styles.active}><Link className="mlink" href="/page_two">Page_two</Link></li>
                    <li className={router.asPath==='/blog' && styles.active} ><Link className="mlink" href="/blog"><a>Blog</a></Link></li>
                    <li className={router.asPath==='/blog-from-api' && styles.active} ><Link className="mlink" href="/blog-from-api"><a>Blog-2</a></Link></li>
                    <li className={router.asPath==='/admin/new-post' && styles.active} ><Link className="mlink" href="/admin/new-post"><a>create-post</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}