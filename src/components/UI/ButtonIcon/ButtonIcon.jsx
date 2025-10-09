import style from './ButtonIcon.module.css'

export default function ButtonIcon( {children, onClick} ) {
    return(
        <button className={style.button} onClick={onClick}>{children}</button>
    )
}