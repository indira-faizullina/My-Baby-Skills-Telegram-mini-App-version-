import styles from './Header.module.css'
import photo from '/photo.jpg'

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.photoContainer}>
                <img src={photo} alt="photo" className={styles.img}/>
            </div>
            <div className={styles.infoContainer}>
                <h1>Умелки моего ребёнка</h1>
                <p>Имя</p>
                <p>Возраст</p>
            </div>
            
        </header>
    )
}