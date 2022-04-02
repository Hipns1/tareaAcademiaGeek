import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Details } from '../components/Details'
import { Home } from '../components/Home'

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:date' element={<Home />} />
				<Route exact path='/details/:id' element={<Details />} />
			</Routes>
		</BrowserRouter>
	)
}
