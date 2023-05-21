import React from 'react'
import styles from './Contact.module.scss'

const EmailContact = (img: string, mailto: string) => {
	const openMail = () => {
		window.location.href = 'mailto:' + mailto
	}
	return (
		<div onClick={openMail} className={styles.contact}>
			<img
				src={img} alt='Email Icon' draggable={false}
				className={styles.logo}>
			</img>
		</div>
	)
}

export default EmailContact
