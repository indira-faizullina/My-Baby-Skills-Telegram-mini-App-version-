import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import styles from './FormSection.module.css'

export default function FormSection() {
    return(
        <Card background={'#DFC5E8CC'} borderColor={'#9ddb7eff'}>
            <h3>НОВАЯ УМЕЛКА</h3>
            <form className={styles.form}>
                <input type="text" placeholder="введите новую умелку" className={styles.input}/>
                <input type="date" name="date" id="date" className={styles.date}/>
                <Button>ДОБАВИТЬ</Button>
            </form>
        </Card>
    )
}