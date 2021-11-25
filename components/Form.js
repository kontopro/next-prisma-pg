import { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css'

export default function Form({savePost}){

    const [post,setPost] = useState({})
    const [counter,setCounter] = useState(0)
    const [elements,setElements] = useState([])

    const handlePost = (e) => {
        e.preventDefault();
        setPost({...post,[e.target.name]: e.target.value})
    }

    const addElement = (e) => {
        e.preventDefault()
        const elem =  {sorder: counter, content:'', attr:e.target.id==='2'?'p':e.target.id==='1'?'h':'img', importance:e.target.id==='1'?1:0}
        setElements([...elements,elem])
        setCounter(counter + 1)        
    }

    const handleElement = (e) => {
        e.preventDefault();
        const idx=e.target.id
        elements[idx].content=e.target.value
        elements[idx].attr[0]==='h'?elements[idx].attr=`h${elements[idx].importance}`:``
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Φτιάχνω το postNew στη μορφή που θέλει το prisma για nested writes
        // https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries/#nested-writes
        const postNested={...post,elements: {create: [...elements]}}
        savePost(postNested)
        console.log(postNested)
    }

    return(
        <form className={styles.addPost} onSubmit={ handleSubmit }>
            <input className={styles.addPost} onChange={handlePost} placeholder="title" name='title' />
            <input className={styles.addPost} onChange={handlePost} placeholder="slug" name='slug' />
            <input className={styles.addPost} onChange={handlePost} placeholder="intro" name='intro' />
            <input className={styles.addPost} onChange={handlePost} placeholder="fimage" name='fimage' />
            <button onClick= {addElement}   id='1'>Add heading</button>
            <button onClick= {addElement}   id='2'>Add paragraph</button>
            <button onClick= {addElement}   id='3'>Add Image</button>
            {
            elements.map(x =>x.attr === 'p'? 
                            <textarea onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`p-${x.sorder}`} />
                            :x.attr[0] ==='h'?
                            <input onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`h-${x.sorder}`} />
                            :x.attr==='img'?
                            <input onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`img-${x.sorder}`} />
                            :`` )
            }            
            <input className={styles.addPost} disabled={!post.title} type="submit" value="Submit" />
        </form>
    )
}