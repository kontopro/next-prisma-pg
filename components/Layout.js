import styles from '../styles/Menu.module.css'
import Head from 'next/head'
import Menu from '../components/Menu'
import Link  from "next/link";

export default function Layout({ children })  {
    
    return(
        <>
            <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>          
          <Menu />
          <div className='container'>
            {children}
            </div>
        <footer>
            <p>kontopro 2022</p>
        </footer>
        </>
    )
}