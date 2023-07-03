import React from 'react'
import Pane from '../../components/pane/Pane'
import Project from '../../components/project/Project'
import styles from './Projects.module.scss'

import dietPlanner from '../../images/projects/dietPlanner.png'
import polyLingo from '../../images/projects/polyLingo.png'
import dbVisualiser from '../../images/projects/dbVisualiser.png'
import question from '../../images/projects/comingSoon.png'

function Projects () {
	return (
		<Pane>
			<div className={styles.title}>
				These are some of my projects:
			</div>
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

					{Project(
						dbVisualiser,
						'Database Visualiser',
						'SQL Teaching Tool',
						'https://github.com/igor-siergiej/database-visualiser')
					}

					{Project(
						question,
						'SetRep Gym Tracker',
						'Coming Soon...',
						'')
					}

				</div>
			</div>
		</Pane>
	)
}

export default Projects
