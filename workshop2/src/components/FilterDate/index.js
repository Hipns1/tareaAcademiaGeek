
export function FilterDate() {
	const date = ['022-06-06', '022-06-06', '022-06-06', '022-06-06', '022-06-06']

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
