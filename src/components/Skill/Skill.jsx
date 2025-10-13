import ButtonIcon from '../UI/ButtonIcon/ButtonIcon'
import Button from '../UI/Button/Button'
import styles from './Skill.module.css'
import deleteIcon from '../../assets/delete.png'
import updateIcon from '../../assets/update.png'
import showIcon from '../../assets/show.png'
import close from '../../assets/close.png'
import Modal from '../UI/Modal/Modal'
import { useState } from 'react'
import { formatedDate } from '../../helpers/formatedDate'

export default function Skill( {skills, skill, setSkills} ) {

    const [hasModal, setHasModal] = useState(false)
    const [inputValue, setInputValue] = useState(skill.title)
    const [dateValue, setDateValue] = useState(skill.date)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const deleteItem = () => {
        setSkills(skills.filter((item) => item.id !== skill.id))
    }

    const updateItem = () => {
        setHasModal(true)
    }

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
        skills.map(item => {
            if (skill.id === item.id) {

            const filtredSkills = skills.filter(item => (item.title === inputValue && skill.id !== item.id))
            if(filtredSkills.length) {
            setHasError(true)
            setErrorMessage('Такой навык уже существует')
            return
        }

            item.title = inputValue
            item.date = dateValue

            setSkills(skills)
            setHasModal(false)
            }
        })
    }

    const closeModal = () => {
        setHasError(false)
        setErrorMessage('')
        setHasModal(false)
        setInputValue(skill.title)
        setDateValue(skill.date)
    }

    return(
        <>
            <div className={styles.wrapper}>
                <span className={styles.date}>{formatedDate(skill.date)}</span>
                <span className={styles.title}>{skill.title}</span>
                <ButtonIcon onClick={deleteItem}><img src={deleteIcon} alt="удалить" className={styles.img}/></ButtonIcon>
                <ButtonIcon onClick={updateItem}><img src={updateIcon} alt="редактировать" className={styles.img}/></ButtonIcon>
                <ButtonIcon><img src={showIcon} alt="показать больше" className={styles.img}/></ButtonIcon>
            </div>
            <Modal open={hasModal}>
                <div className={styles.modalHeader}>
                    <ButtonIcon onClick={closeModal}><img src={close} alt="закрыть" className={styles.closeButton}/></ButtonIcon>
                </div>
                <div className={styles.modalBody}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type="text" placeholder="введите новую умелку" className={styles.input} value={inputValue} onChange={handleInputChange}/>
                        <input type="date" name="date" id="date" className={styles.inputDate} value={dateValue} onChange={handleDateChange}/>
                        {hasError ? <p style={{color: "red"}}>{errorMessage}</p> : null}
                    <div className={styles.buttonWrapper}>
                        <Button>СОХРАНИТЬ</Button>
                    </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}