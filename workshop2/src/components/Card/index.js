import './CardStyles.css'
export function Card() {
	// const {title,description,speakers} = data
	const data = [1, 2, 3]
	return (
		<>
			{data.map((item) => (
				<article className='cardContainer' key={item}>
					<div className='cardTitle'>
						<h2>
							Chief Operations Officer <span>⭐</span>
						</h2>
						<div className='cardDescription'>
							<h3>Description:</h3>
							<span>International</span>
						</div>
					</div>
					<div>
						<h3>Speakers</h3>
						<div className='cardSpeakers'>
							<span>Robin Price</span>
							<span>Tomas Mosciski Sr.</span>
							<span>Karl Torp</span>
						</div>
					</div>
					<div className='cardDetails'>
						<h3>Industry Segment: Creative</h3>
						<h3>primary_topic: Garden</h3>
						<h3>session_type:Strategist</h3>
						<h3>audience_type:Trans*Female</h3>
						<h3>lenguage:KW</h3>
						<h3>audience_level:Assistant</h3>
						<h3>date:2022-06-06</h3>
					</div>
					<button>Details</button>
				</article>
			))}
		</>
	)
}
