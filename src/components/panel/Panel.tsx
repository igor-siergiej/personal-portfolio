import React from 'react'
import styles from './Panel.module.scss'
import { IconType } from 'react-icons'

function Panel (icon: IconType, title: string, description: string) {
	return (
		<div className={styles.panelContainer}>
			{React.createElement(icon, { className: styles.icon })}
			<div className={styles.titleContainer}>
				{title}
			</div>
			<div className={styles.descriptionContainer}>
				{description}
			</div>
		</div>
	)
}
export { Panel }
