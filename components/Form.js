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
    }

    return(
        <form className={styles.addPost} onSubmit={ handleSubmit }>
            <input className={styles.addPost} onChange={handlePost} placeholder="title" name='title' />
            <input className={styles.addPost} onChange={handlePost} placeholder="slug" name='slug' />
            <input className={styles.addPost} onChange={handlePost} placeholder="intro (summary)" name='intro' />
            <input className={styles.addPost} onChange={handlePost} placeholder="source of featured image" name='fimage' />
            
            <div className={styles.buttonArea}>
            <button className={styles.addPost} onClick= {addElement}   id='1'>Add heading</button><br/>
            <button className={styles.addPost} onClick= {addElement}   id='2'>Add paragraph</button><br/>
            <button className={styles.addPost} onClick= {addElement}   id='3'>Add Image</button><br/>
            </div>
            {
            elements.map(x =>x.attr === 'p'? 
                            <><textarea className={styles.addPost} rows="6" cols="75" onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`p-${x.sorder}`} placeholder="start writing your paragraph"  /><br/></>
                            :x.attr[0] ==='h'?
                            <><input className={styles.addPost} onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`h-${x.sorder}`} placeholder="heading"  /><br/></>
                            :x.attr==='img'?
                            <><input className={styles.addPost} onChange={handleElement} key={x.sorder} id={x.sorder} type='text' name={`img-${x.sorder}`} placeholder="source of image" /><br/></>
                            :`` )
            }            
            <input className={styles.addPost} disabled={!post.title} type="submit" value="Submit" />
        </form>
    )
}