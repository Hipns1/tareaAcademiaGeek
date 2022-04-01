// import { useState } from 'react'
import './FilterDate.css'
export function FilterDate() {
	const date = ['022-06-06', '022-06-06', '022-06-06', '022-06-06', '022-06-06']
	// const [query, setQuery]= useState('')

	// 	const filterGame =
	// 		sessions.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())) || sessions

	return (
		<section className='filterDate'>
			<button className='filterBtn'>All Data</button>
			{date.map((item, index) => (
				<div className='filterInput' key={index}>
					<input type='radio' id='huey' name='tag' value={item} />
					<label htmlFor={item}>{item}</label>
				</div>
			))}
		</section>
	)
}
