import React from 'react'
import styles from './Contact.module.scss'

const Contact = (img: string, url: string) => {
	const goToURL = () => {
		window.open(url)
	}
	return (
		<div onClick={goToURL} className={styles.contact}>
			<img
				src={img} alt='Contact Icon' draggable={false}
				className={styles.logo}>
			</img>
		</div>
	)
}

export default Contact
