import { useState } from 'react'
import java from '../../images/java.png'
import styles from './Logo.module.scss'

function Logo () {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={styles.logoContainer}>
			<img onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
				src={java} alt='Java Logo' draggable={false}
				className={isActive ? styles.logo : styles.grayLogo}></img>
		</div>
	)
}
export { Logo }
