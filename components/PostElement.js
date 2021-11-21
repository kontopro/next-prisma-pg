import styles from '../styles/PostElement.module.css'
import Link  from "next/link";

export default function PostElement({...props})  {
    
    const Elem = props.el
    
    if (Elem !== 'img')  {
        return(
            <Elem className={styles.elem}>
                {props.cont}
            </Elem>)
    }
    if (Elem === `img`)  {
        return(
            <Elem src={props.cont} />
        )
    }
}