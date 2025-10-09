import styles from './Modal.module.css'
import { createPortal } from 'react-dom'
import { useRef, useEffect } from 'react'


export default function Modal( {children, open} ) {

const modal = useRef()

useEffect(() => {
    open ? modal.current.showModal() : modal.current.close()
}, [open])

    return(
        createPortal(<dialog ref={modal} className={styles.dialog}>{children}</dialog>,
            document.getElementById('modal')
        )
    )
}