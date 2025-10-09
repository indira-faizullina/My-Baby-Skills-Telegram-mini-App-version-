import ButtonIcon from '../UI/ButtonIcon/ButtonIcon'
import styles from './Skill.module.css'
import deleteIcon from '../../assets/delete.png'
import updateIcon from '../../assets/update.png'
import showIcon from '../../assets/show.png'
import close from '../../assets/close.png'
import Modal from '../UI/Modal/Modal'
import Form from '../UI/Form/Form'
import { useState } from 'react'

export default function Skill( {skills, skill, setSkills} ) {

    const [hasModal, setHasModal] = useState(false)

    const deleteItem = () => {
        setSkills(skills.filter((item) => item.id !== skill.id))
    }

    const updateItem = () => {
        setHasModal(true)
    }

    const closeModal = () => setHasModal(false)

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
                    <Form skills={skills} setSkills={setSkills}/>
                </div>
            </Modal>
        </>
    )
}