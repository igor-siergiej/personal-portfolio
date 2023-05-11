import React from 'react'
import styles from './Pane.module.css'

type PaneProps = {
    children: React.ReactNode
}

const NavBar = (props: PaneProps) => {
	return (
		<div className={styles.pane}>
			{props.children}
		</div>
	)
}

export default NavBar
