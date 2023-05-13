import React from 'react'
import styles from './NavBar.module.scss'
import { ThemeType, changeColor } from '../../colors'
import icon from '../../images/icons/lowResIcon.png'
import { NavLink } from '../link/NavLink'

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
	return (
		<nav className={styles.navBar}>
			<div className={styles.title}>
				<img src={icon} onClick={changeThemeColor} draggable={false} alt='Icon' className={styles.icon}></img>
                Igor's Portfolio
			</div>
			{Links()}
		</nav>
	)
}

function changeThemeColor () {
	changeColor(ThemeType.primary, 'blue')
}

export default NavBar
