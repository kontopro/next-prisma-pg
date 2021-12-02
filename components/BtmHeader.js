import styles from '../styles/BtmHeader.module.css'
import Link from 'next/dist/client/link'

export default function BtmHeader()  {
    
    return(
        <nav className={styles.btmHeader}>
            <ul>
                <li><Link href="/"><a tabIndex='0'>Category Name 1</a></Link></li>
                <li><Link href="/"><a>Name 2</a></Link></li>
                <li><Link href="/"><a>Category 3</a></Link></li>
                <li><Link href="/"><a>Category 4</a></Link></li>
                <li><Link href="/"><a>Name 5</a></Link></li>
                <li><Link href="/"><a>Category Name 6</a></Link></li>
                <li><Link href="/"><a>Category Name 7</a></Link></li>
                <li><Link href="/"><a>Category Name 8</a></Link></li>
                <li><Link href="/"><a>Category Name 9</a></Link></li>
            </ul>
        </nav>
    )
}