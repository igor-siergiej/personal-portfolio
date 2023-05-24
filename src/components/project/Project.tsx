import React from 'react'
import styles from './Project.module.scss'

const Project = (img: string, title: String, text: String, url: string) => {
	const goToURL = () => {
		window.open(url, '_blank', 'noopener')
	}
	return (
		<div className={styles.project} onClick={goToURL}>

			<div className={styles.projectContainer}>

				<div className={styles.textContainer}>

					<div className={styles.title}>{title}</div>

					<br></br>

					<div className={styles.text}>{text}</div>

				</div>

				<img src={img} className={styles.image} draggable={false} alt='Icon'></img>

			</div>
		</div>
	)
}

export default Project
