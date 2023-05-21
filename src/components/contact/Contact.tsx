import React from 'react'
import styles from './Contact.module.scss'

const Contact = (img: string, handleClick: Function, url:string) => {
	return (
		<div onClick={() => handleClick(url)} className={styles.contact}>
			<img
				src={img} alt='Contact Icon' draggable={false}
				className={styles.image}>
			</img>
		</div>
	)
}

export default Contact
