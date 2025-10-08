import { useState } from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import styles from './FormSection.module.css'

export default function FormSection({skills, setSkills}) {

    const [inputValue, setInputValue] = useState('')
    const [dateValue, setDateValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleDateChange = (event) => {
        setDateValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSkills([...skills, {
            id: Date.now(),
            date: dateValue,
            title: inputValue,
        }])
    }

    return(
        <Card background={'#DFC5E8CC'} borderColor={'#9ddb7eff'}>
            <h3>НОВАЯ УМЕЛКА</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="введите новую умелку" className={styles.input} value={inputValue} onChange={handleInputChange}/>
                <input type="date" name="date" id="date" className={styles.date} value={dateValue} onChange={handleDateChange}/>
                <Button>ДОБАВИТЬ</Button>
            </form>
        </Card>
    )
}