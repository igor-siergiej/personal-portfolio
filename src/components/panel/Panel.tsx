import { useState } from 'react'
import styles from './Panel.module.scss'

function Panel (title: string, description: string) {
	return (
		<div className={styles.panelContainer}>
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
