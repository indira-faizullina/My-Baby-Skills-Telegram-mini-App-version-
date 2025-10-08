import ButtonIcon from '../UI/ButtonIcon/ButtonIcon'
import styles from './Skill.module.css'
import deleteIcon from '../../assets/delete.png'
import updateIcon from '../../assets/update.png'
import showIcon from '../../assets/show.png'

export default function Skill( {skills, skill, setSkills} ) {

    const deleteItem = () => {
        setSkills(skills.filter((item, i) => skill.id !== item.id))
    }

    return(
        <>
            <div className={styles.wrapper}>
                <span className={styles.date}>{skill.date}</span>
                <span className={styles.title}>{skill.title}</span>
                <ButtonIcon onClick={deleteItem}><img src={deleteIcon} alt="удалить" /></ButtonIcon>
                <ButtonIcon><img src={updateIcon} alt="редактировать" /></ButtonIcon>
                <ButtonIcon><img src={showIcon} alt="показать больше" /></ButtonIcon>
            </div>
        </>
    )
}