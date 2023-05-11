import React from 'react'
import styles from './Home.module.scss'
import Pane from '../../components/pane/Pane'
import image from '../../images/image.jpg'

function Home () {
	return (
		<div>
			<Pane>
				<img src={image} alt='Icon' className={styles.img}></img>

				<div className={styles.heading}>
					Hello, I'm Igor, a student
					<br></br>
					sofware engineer.
				</div>

				<div className={styles.subHeading}>
					I like to build systems.
				</div>

				<div className={styles.banner}>
					<p>Banner</p>
					<p>Banner</p>
					<p>Banner</p>
					<p>Banner</p>
					<p>Banner</p>
				</div>
			</Pane>
		</div>
	)
}

export default Home
