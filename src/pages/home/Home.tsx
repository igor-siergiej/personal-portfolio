import styles from './Home.module.scss'
import Pane from '../../components/pane/Pane'
import image from '../../images/image.jpg'
import pdf from '../../IgorSiergiejCV.pdf'
import { Logo } from '../../components/logo/Logo'

import java from '../../images/java.png'
import android from '../../images/android.png'
import intellij from '../../images/intellij.png'
import postgreSQL from '../../images/css.png'
import ts from '../../images/ts.png'

function Home () {
	return (
		<div>
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

				<div className={styles.subHeading}>
					I like to build systems.&#128170;
				</div>

				<div className={styles.banner}>
					{Logo(java)}
					{Logo(android)}
					{Logo(intellij)}
					{Logo(postgreSQL)}
					{Logo(ts)}
				</div>
			</Pane>
		</div>
	)
}

function onClick () {
	window.open(pdf)
}

export default Home
