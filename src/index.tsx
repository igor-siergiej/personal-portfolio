import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Projects from './pages/projects/Projects'
import About from './pages/about/About'

export default function Website () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

// temporary setting animation time to 0 to prevent going back animations
// from playing on webpage load.
setTimeout(function () {
	document.body.className = ''
}, 500)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<Website />
	</React.StrictMode>
)
