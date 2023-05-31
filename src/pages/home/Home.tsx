import styles from './Home.module.scss'

import Pane from '../../components/pane/Pane'
import { Logo } from '../../components/logo/Logo'

import image from '../../images/image.jpg'
import java from '../../images/logos/java.png'
import android from '../../images/logos/android.png'
import intellij from '../../images/logos/intellij.png'
import postgreSQL from '../../images/logos/css.png'
import ts from '../../images/logos/ts.png'

import pdf from '../../IgorSiergiejCV.pdf'
import { Panel } from '../../components/panel/Panel'

function Home () {
	return (
		<Pane>
			<div className={styles.imgContainer}>
				<img onClick={onClick} src={image} alt='Me' draggable={false} className={styles.img}></img>
				<span className={styles.label}>
					&lt;- Click me!
				</span>
			</div>

			<div className={styles.heading}>
				Hello, I'm Igor, a student
				<br></br>
				sofware engineer.
			</div>

			<div className={styles.subSubHeading}>
				I'm passionate about building cutting-edge systems and writing clean, efficient code.&#128170;
			</div >

			<div className={styles.banner}>
				<div className={styles.logoContainer}>
					{Logo(java)}
					{Logo(android)}
					{Logo(intellij)}
					{Logo(postgreSQL)}
					{Logo(ts)}
				</div>
			</div>

			<div className={styles.subHeading}>
				My interests and skills.
			</div>

			<div className={styles.skillsContainer}>
				{Panel('Front-end Development', 'Designing interfaces that are intuitive, efficient, and enjoyable to use.')}
				{Panel('Mobile App Development', 'Transforming ideas into exceptional mobile app experiences.')}
				{Panel('Back-end Development', 'Bringing your vision to life with the latest technology and design trends.')}
			</div>
		</Pane>
	)
}

function onClick () {
	window.open(pdf, '_blank', 'noopener')
}

export default Home
