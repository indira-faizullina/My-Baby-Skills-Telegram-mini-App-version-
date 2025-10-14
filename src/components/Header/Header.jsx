import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import photo from '/photo.jpg'
import Modal from '../UI/Modal/Modal'
import Button from '../UI/Button/Button'
import { ageCounter } from '../../helpers/ageCounter'

export default function Header() {

    const [babyName, setBabyName] = useState('')
    const [babyBirth, setBabyBirth] = useState('')
    const [age, setAge] = useState('')
    const [hasModal, setHasModal] = useState(false)

    useEffect(() => {
        if(!babyName) {
            setHasModal(true)   
        }
        if(babyBirth) {
            setAge(ageCounter(babyBirth))
        }
    }, [])

    const handlerChangeName = (e) => setBabyName(e.target.value)
    const handlerChangeDate = (e) => setBabyBirth(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        setAge(ageCounter(babyBirth))
        setHasModal(false)
    }

    

    return(
        <>
        <header className={styles.header}>
            <div className={styles.photoContainer}>
                <img src={photo} alt="photo" className={styles.img}/>
            </div>
            <div className={styles.infoContainer}>
                <h1>Умелки моего ребёнка</h1>
                {babyName ? <p>{babyName}</p> : null}
                {age ? 
                <p>
                    <span>Возраст: </span>
                    {age.years ? <span>{`${age.years} г. `}</span> : null}
                    {age.months ? <span>{`${age.months} мес. `}</span> : null}
                    {age.days ? <span>{`${age.days} дн.`}</span> : null}
                </p> 
                : null}
            </div>
        </header>
        <Modal open={hasModal}>
            <form>
            <label htmlFor="name">Введите имя ребёнка</label>
            <input type="text" id="name" value={babyName} onChange={handlerChangeName}/>
            <label htmlFor="date">Введите дату рождения ребёнка</label>
            <input type="date" id="date" value={babyBirth} onChange={handlerChangeDate}/>
            <Button onClick={handleSubmit}>Сохранить</Button>
            </form>
        </Modal>
        </>
    )
}