import React from 'react'
import styles from './Contact.module.scss'
import { IconType } from 'react-icons'

const Contact = (icon: IconType, handleClick: Function, url:string) => {
	return (
		<div onClick={() => handleClick(url)} className={styles.contact}>
			{React.createElement(icon, { className: styles.icon })}
		</div>
	)
}

export default Contact
