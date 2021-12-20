import styles from '../styles/BtmHeader.module.css'
import Link from 'next/dist/client/link'

export default function BtmHeader()  {
    
    return(
        <nav className={styles.btmHeader}>
            <ul>
                <li><Link href="/"><a tabIndex='0'>Education</a></Link></li>
                <li><Link href="/"><a>Portfolio</a></Link></li>
                <li><Link href="/"><a>Research</a></Link></li>
                <li><Link href="/"><a>CV</a></Link></li>
                <li><Link href="/"><a>Name 5</a></Link></li>
                <li><Link href="/"><a>Category Name 6</a></Link></li>
                <li><Link href="/"><a>Category Name 7</a></Link></li>
                <li><Link href="/"><a>Category Name 8</a></Link></li>
                <li><Link href="/"><a>Category Name 9</a></Link></li>
            </ul>
        </nav>
    )
}