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
			{NavLink('Projects', '/projects')}
			{NavLink('About Me', '/about')}
		</div>
	)
}

const NavBar = () => {
	const [theme, setTheme] = useState(() => setInitialState())

	useEffect(() => {
		window.localStorage.setItem('isDarkTheme', JSON.stringify(theme))
	}, [theme])

	const toggleTheme = () => {
		if (theme) {
			setLightTheme()
			setTheme(false)
		} else {
			setDarkTheme()
			setTheme(true)
		}
	}

	return (
		<nav className={styles.navBar}>
			<div className={styles.title}>
				<img src={icon} draggable={false} alt='Icon' className={styles.icon}></img>
                Igor Siergiej
			</div>
			<label>
				<span className={styles.label}>Theme: </span>
				<Switch onChange={toggleTheme} checked={theme === true} />
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
