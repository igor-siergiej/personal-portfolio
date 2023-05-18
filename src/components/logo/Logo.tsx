import { useState } from 'react'
import styles from './Logo.module.scss'

function Logo (image: string) {
	return (
		<div className={styles.logoContainer}>
			<img
				src={image} alt='Java Logo' draggable={false}
				className={styles.logo}></img>
		</div>
	)
}
export { Logo }
