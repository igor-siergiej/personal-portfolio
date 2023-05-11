import React from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  text: string;
  class: string;
}

function Button (props: ButtonProps) {
	return (
		<div className={styles.buttonContainer}>
			<button className={props.class}>{props.text}</button>
		</div>
	)
}

export { Button }
