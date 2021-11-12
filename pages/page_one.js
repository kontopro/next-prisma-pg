import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data:session }  = useSession()
        
  return(
        
          <main className={styles.main}>
            <h1 className={styles.title}>
              Page one <br />
              
            </h1>
          
            <p className={styles.description}>
              {session?session.user.email:``} <br/>
              {session?<button onClick={() => signOut()}>Sign out</button>:<button onClick={() => signIn()}>Sign in</button>}
            </p>            
          </main>
  )
}
