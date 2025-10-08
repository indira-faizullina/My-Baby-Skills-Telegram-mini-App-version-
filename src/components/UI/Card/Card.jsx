import styles from './Card.module.css'

export default function Card( {background, borderColor, children} ) {
    return(
        <div className={styles.card} style={{background: background, borderColor: borderColor}}>{children}</div>
    )
}