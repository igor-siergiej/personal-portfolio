
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Contacts from './pages/contacts/Contacts'
import Projects from './pages/projects/Projects'

export default function Website () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/projects" element={<Projects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<Website />
	</React.StrictMode>
)
