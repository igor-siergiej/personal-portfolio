import React from 'react'
import Pane from '../../components/pane/Pane'
import Project from '../../components/project/Project'
import styles from './Projects.module.scss'

import dietPlanner from '../../images/projects/dietPlanner.png'
import polyLingo from '../../images/projects/polyLingo.png'

function Projects () {
	return (
		<div>
			<Pane>
				<h1> These are some of my projects:</h1>
				<div className={styles.container}>
					<div className={styles.projectsContainer}>
						{Project(
							dietPlanner,
							'Diet Planner',
							'Diet planning desktop app',
							'https://github.com/igor-siergiej/diet-planner')
						}

						{Project(
							polyLingo,
							'PolyLingo',
							'Language learning android app',
							'https://github.com/igor-siergiej/PolyLingo')
						}

					</div>
				</div>
			</Pane>
		</div>
	)
}

export default Projects
