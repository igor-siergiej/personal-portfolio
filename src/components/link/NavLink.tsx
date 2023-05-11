import React from 'react'
import styles from './NavLink.module.scss'
import { Link } from 'react-router-dom'

const NavLink = (text: String, destination: String) => {
	return (
		<div className={styles.navLinkContainer}>
			<Link to={destination.toString()} className={styles.navLink}>{text}</Link>
		</div>
	)
}

export { NavLink }
