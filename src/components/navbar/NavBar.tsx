import styles from './NavBar.module.scss'
import icon from '../../images/icons/lowResIcon.png'
import { NavLink } from '../link/NavLink'
import React, { useState, useEffect } from 'react'
import { setLightTheme, setDarkTheme } from '../../theme/colors'
import Switch from 'react-switch'

const Links = () => {
	return (
		<div className={styles.navLinksContainer}>
			{NavLink('Home', '/')}
			{NavLink('Contacts', '/contacts')}
			{NavLink('Projects', '/projects')}
		</div>
	)
}

const NavBar = () => {
	const [showBanner, setShowBanner] = useState(() => setInitialState())

	useEffect(() => {
		window.localStorage.setItem('isDarkTheme', JSON.stringify(showBanner))
	}, [showBanner])

	const toggleTheme = () => {
		if (showBanner) {
			setLightTheme()
			setShowBanner(false)
		} else {
			setDarkTheme()
			setShowBanner(true)
		}
	}

	return (
		<nav className={styles.navBar}>
			<div className={styles.title}>
				<img src={icon} draggable={false} alt='Icon' className={styles.icon}></img>
                Igor's Portfolio
			</div>
			<label>
				<span className={styles.label}>Theme: </span>
				<Switch onChange={toggleTheme} checked={showBanner === true} />
			</label>
			<div>

			</div>
			{Links()}
		</nav>
	)
}

function setInitialState () {
	const value = window.localStorage.getItem('isDarkTheme')
	const booleanValue = JSON.parse(value ?? 'null')
	if (booleanValue == null) {
		setDarkTheme()
		return true
	} else if (booleanValue) {
		setDarkTheme()
		return true
	} else {
		setLightTheme()
		return false
	}
}

export default NavBar
