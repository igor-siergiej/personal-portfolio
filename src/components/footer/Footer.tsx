import React from 'react'
import styles from './Footer.module.scss'
import Contact from '../contact/Contact'

import email from '../../images/contacts/email.svg'
import github from '../../images/contacts/github.png'
import linkedIn from '../../images/contacts/linkedIn.png'
import instagram from '../../images/contacts/instagram.png'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<h2> Contact me! </h2>
			You can find me on these platforms or just email me...

			<div className={styles.contacts}>
				{Contact(github, goToURL, 'https://github.com/igor-siergiej')}
				{Contact(linkedIn, goToURL, 'https://www.linkedin.com/in/igor-siergiej')}
				{Contact(email, goToMail, 'igorsiergiej@gmail.com')}
				{Contact(instagram, goToURL, 'https://www.instagram.com/igor.siergiej')}
			</div>
		</div>
	)
}

function goToURL (url:string) {
	window.open(url)
}

function goToMail (address:string) {
	window.location.href = 'mailto:' + address
}

export default Footer
