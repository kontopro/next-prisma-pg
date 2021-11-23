import { useState } from 'react';
import styles from '../styles/Form.module.css'

export default function Form({savePost}){

    const [post,setPost] = useState({title:''})

    const handlePost = (e) => {
        e.preventDefault();
        setPost({...post,[e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post)
        return (savePost(post))
    }
    
    return(
        <form className={styles.addPost} onSubmit={ handleSubmit }>
        <input className={styles.addPost} onChange={handlePost} placeholder="title" name='title' />
        {/* <input className={styles.addPost} placeholder="heading" name='heading' /> */}
        {/* <input className={styles.addPost} placeholder="paragraph" name='paragraph' /> */}

        <input className={styles.addPost} type="submit" value="Submit" />
        </form>
    )
}