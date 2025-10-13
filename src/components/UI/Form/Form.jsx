import { useState } from 'react'
import Button from '../Button/Button'
import styles from './Form.module.css'

export default function Form({skills, setSkills}) {

    const [inputValue, setInputValue] = useState('')
    const [dateValue, setDateValue] = useState('')
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (event) => {
        setHasError(false)
        setErrorMessage('')
        setInputValue(event.target.value)
    }

    const handleDateChange = (event) => {
        setHasError(false)
        setErrorMessage('')
        setDateValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!inputValue.trim() || !dateValue) {
            setHasError(true)
            setErrorMessage('Заполните все поля')
            return
        }

        const filtredSkills = skills.filter(item => item.title === inputValue)
        if(filtredSkills.length) {
            setHasError(true)
            setErrorMessage('Такой навык уже существует')
            return
        }

        setSkills([...skills, {
            id: Date.now(),
            date: dateValue,
            title: inputValue,
        }])
        setInputValue('')
        setDateValue('')
    }

    return(
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" placeholder="введите новую умелку" className={styles.input} value={inputValue} onChange={handleInputChange}/>
                <input type="date" name="date" id="date" className={styles.date} value={dateValue} onChange={handleDateChange}/>
                {hasError ? <p style={{color: "red"}}>{errorMessage}</p> : null}
                <Button>ДОБАВИТЬ</Button>
            </form>
    )
}