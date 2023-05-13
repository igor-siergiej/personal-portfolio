import { useState } from 'react'
import styles from './Logo.module.scss'

function Logo (image: string) {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.logoContainer}>
			<img onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
				src={image} alt='Java Logo' draggable={false}
				className={isActive ? styles.logo : styles.grayLogo}></img>
		</div>
	)
}
export { Logo }
