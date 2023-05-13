import React from 'react'
import styles from './Home.module.scss'
import Pane from '../../components/pane/Pane'
import image from '../../images/image.jpg'
import pdf from '../../IgorSiergiejCV.pdf'
import { Logo } from '../../components/logo/Logo'
import java from '../../images/java.png'

function Home () {
	return (
		<div>
			<Pane>
				<img onClick={onClick} src={image} alt='Me' draggable={false} className={styles.img}></img>

				<div className={styles.heading}>
					Hello, I'm Igor, a student
					<br></br>
					sofware engineer.
				</div>

				<div className={styles.subHeading}>
					I like to build systems.
				</div>

				<div className={styles.banner}>
					{Logo(java)}
					{Logo(image)}
					{Logo(java)}
					{Logo(java)}
					{Logo(java)}
				</div>
			</Pane>
		</div>
	)
}

function coloriseImg (text:String) {

}

function onClick () {
	window.open(pdf)
}

export default Home
