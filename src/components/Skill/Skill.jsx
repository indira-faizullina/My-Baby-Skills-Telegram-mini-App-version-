import ButtonIcon from '../UI/ButtonIcon/ButtonIcon'
import Button from '../UI/Button/Button'
import styles from './Skill.module.css'
import deleteIcon from '../../assets/delete.png'
import updateIcon from '../../assets/update.png'
import showIcon from '../../assets/show.png'
import close from '../../assets/close.png'
import Modal from '../UI/Modal/Modal'
import { useState } from 'react'

export default function Skill( {skills, skill, setSkills} ) {

    const [hasModal, setHasModal] = useState(false)
    const [inputValue, setInputValue] = useState(skill.title)
    const [dateValue, setDateValue] = useState(skill.date)

    const deleteItem = () => {
        setSkills(skills.filter((item) => item.id !== skill.id))
    }

    const updateItem = () => {
        setHasModal(true)
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleDateChange = (event) => {
        setDateValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        skills.map(item => {
            if (skill.id === item.id) {
                skill.title = inputValue
                skill.date = dateValue
            }
        })
        setSkills(skills)
        setHasModal(false)
    }

    const closeModal = () => {
        setHasModal(false)
        setInputValue(skill.title)
        setDateValue(skill.date)
    }

    return(
        <>
            <div className={styles.wrapper}>
                <span className={styles.date}>{skill.date}</span>
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
                    <div className={styles.buttonWrapper}>
                        <Button>СОХРАНИТЬ</Button>
                    </div>

                    </form>
                </div>
            </Modal>
        </>
    )
}