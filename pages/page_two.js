import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data:session }  = useSession()
        
  return (
        
          <main className={styles.main}>
            <h1 className={styles.title}>
              Page 2
            </h1>
          
            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>            
          </main>
    )
}
