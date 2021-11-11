import { useForm } from "react-hook-form";
import styles from '../styles/Form.module.css'

export default function Form({savePost}){
    
    const {register,handleSubmit}= useForm();
    return(
        <form className={styles.addPost} onSubmit={ handleSubmit(savePost) }>
        <input className={styles.addPost} placeholder="hello" {...register("title")} />

        <input className={styles.addPost} type="submit" value="Submit" />
        </form>
    )
}