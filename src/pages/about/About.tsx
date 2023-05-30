import React from 'react'
import styles from './About.module.scss'
import Pane from '../../components/pane/Pane'
import image from '../../images/image.jpg'

function About () {
	return (
		<Pane>
			<div className={styles.container}>
				<img src={image} alt='Me' draggable={false} className={styles.img}></img>

				<div className={styles.text}>
					<p>
					Back in 2012, I got my hands on my first computer which started my journey of playing around with technology.
					From building and upgrading my computer to modding games to coding and web development.
					</p>
					<p>
					Fast-forward to today, and I’ve had the privilege of working on software in a huge corporation during an
					internship and I'm an aspiring graduate software engineer.
					</p>
					<p>
					Outisde of sitting at the computer I have a passion for health and nutrition, I lift weights and body build
					at the gym. I also like to hike and skate on inline skates.
					</p>
				</div>
			</div>
		</Pane>
	)
}

export default About
