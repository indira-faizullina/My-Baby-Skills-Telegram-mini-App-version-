import ButtonIcon from '../UI/ButtonIcon/ButtonIcon'
import styles from './Skill.module.css'
import deleteIcon from '../../assets/delete.png'
import updateIcon from '../../assets/update.png'
import showIcon from '../../assets/show.png'

export default function Skill( {data} ) {

    return(
        <>
            <div className={styles.wrapper}>
                <span className={styles.date}>{data.date}</span>
                <span className={styles.title}>{data.title}</span>
                <ButtonIcon><img src={deleteIcon} alt="удалить" /></ButtonIcon>
                <ButtonIcon><img src={updateIcon} alt="редактировать" /></ButtonIcon>
                <ButtonIcon><img src={showIcon} alt="показать больше" /></ButtonIcon>
            </div>
        </>
    )
}