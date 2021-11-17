import styles from '../styles/Home.module.css'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data:session }  = useSession()
  console.log(session?session.user.email:`no user logged in`)
        
  return(
        <>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome <br />
              {session?session.user.email:``} <br/>
              {session?<button onClick={() => signOut()}>Sign out</button>:<button onClick={() => signIn()}>Sign in</button>}
            </h1>
          
            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>            
          </main>
          <footer className={styles.footer}>          
          </footer>
        </>
  )
}
