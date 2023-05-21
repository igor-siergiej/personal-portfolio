import React from 'react'
import styles from './Footer.module.scss'
import Contact from '../contact/Contact'
import EmailContact from '../contact/EmailContact'

import email from '../../images/contacts/email.svg'
import github from '../../images/contacts/github.png'
import linkedIn from '../../images/contacts/linkedIn.png'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<h2> Contact me! </h2>
			You can find me on these platforms or just email me...

			<div className={styles.contacts}>
				{Contact(github, 'https://github.com/igor-siergiej')}
				{Contact(linkedIn, 'https://www.linkedin.com/in/igor-siergiej/')}
				{EmailContact(email, 'igorsiergiej@gmail.com')}
			</div>

		</div>
	)
}

export default Footer
