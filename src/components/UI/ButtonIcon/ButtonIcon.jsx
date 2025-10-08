import style from './ButtonIcon.module.css'

export default function ButtonIcon( {children} ) {
    return(
        <button className={style.button}>{children}</button>
    )
}