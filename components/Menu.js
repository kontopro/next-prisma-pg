import styles from '../styles/Menu.module.css'
import Link  from "next/link";
import { useRouter } from 'next/router'

export default function Menu()  {
    
    const router=useRouter()

    return(
        <div className={styles.header}>
            <div className={styles.lHeader}><Link href="/"><a><img src='/logo.jpg' height='50' width='60' /></a></Link></div>
            <nav className={styles.mHeader}>
                <ul>
                    <li className={router.asPath==='/'?styles.active:undefined} ><Link className="mlink" href="/"><a>Home</a></Link></li>                    
                    <li className={router.asPath==='/blog'?styles.active:undefined} ><Link className="mlink" href="/blog"><a>Blog</a></Link></li>
                    <li className={router.asPath==='/pricing'?styles.active:undefined}><Link className="mlink" href="/pricing"><a>Pricing</a></Link></li>
                    <li className={router.asPath==='/admin/new-post'?styles.active:undefined} ><Link className="mlink" href="/admin/new-post"><a>Membership</a></Link></li>
                </ul>
            </nav>
            <div className={styles.rHeader}>
                <form className='searchForm'>
                    <p className='searchSvg'>
                        <svg viewBox="0 0 24 24" width="1em" height="1em">
                            <path d="M22 20.514l-5.517-5.519a8.023 8.023 0 001.674-4.904c0-4.455-3.624-8.079-8.079-8.079C5.624 2.012 2 5.636 2 10.091s3.624 8.079 8.079 8.079a8.03 8.03 0 004.933-1.695l5.512 5.514L22 20.514zm-11.921-4.431c-3.305 0-5.993-2.688-5.993-5.992s2.688-5.992 5.993-5.992a6 6 0 015.992 5.992 6 6 0 01-5.992 5.992z">
                            </path>
                        </svg>
                    </p>
                    <input type='text' placeholder='Search blog...' />
                </form>
            </div>
        </div>
    )
}