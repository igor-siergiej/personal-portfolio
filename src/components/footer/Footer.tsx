import React from 'react'
import styles from './Footer.module.scss'
import Contact from '../contact/Contact'

import { BsInstagram } from 'react-icons/bs'
import { AiOutlineMail, AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.text}>
				<h2> Contact me! </h2>
			You can find me on these platforms or just email me...
			</div>

			<div className={styles.contacts}>
				{Contact(AiFillGithub, goToURL, 'https://github.com/igor-siergiej')}
				{Contact(AiOutlineLinkedin, goToURL, 'https://www.linkedin.com/in/igor-siergiej')}
				{Contact(AiOutlineMail, goToMail, 'igorsiergiej@gmail.com')}
				{Contact(BsInstagram, goToURL, 'https://www.instagram.com/igor.siergiej')}
			</div>
		</div>
	)
}

function goToURL (url:string) {
	window.open(url, '_blank', 'noopener')
}

function goToMail (address:string) {
	window.location.href = 'mailto:' + address
}

export default Footer
