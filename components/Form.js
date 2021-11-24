import { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css'

export default function Form({savePost}){

    const [post,setPost] = useState({title:''})
    const [counter,setCounter] = useState(0)
    const [elements,setElements] = useState([])

    const handlePost = (e) => {
        e.preventDefault();
        setPost({...post,[e.target.name]: e.target.value})
    }

    async function addParagraph  (e)  {
        e.preventDefault()
        const paragraph =  {sorder: counter, attr:'p', content:''}
        setElements([...elements,paragraph])
        setCounter(counter + 1)        
    }

    const handleElement = (e) => {
        e.preventDefault();
        const idx=e.target.id
        elements[idx].content=e.target.value
        console.log(elements)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Φτιάχνω το postNew στη μορφή που θέλει το prisma για nested writes
        // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries/#nested-writes
        const postNew={...post,elements: {create: [...elements]}}
        savePost(postNew)
    }
    
    return(
        <form className={styles.addPost} onSubmit={ handleSubmit }>
            <input className={styles.addPost} onChange={handlePost} placeholder="title" name='title' />
            {
            elements.map(x => <textarea onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`p-${x.sorder}`}     />)
            }
            <button onClick= {addParagraph} >Add paragraph</button>
            <input className={styles.addPost} disabled={!post.title} type="submit" value="Submit" />
        </form>
    )
}