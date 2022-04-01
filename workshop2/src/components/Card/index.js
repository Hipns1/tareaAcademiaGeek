import { Link } from 'react-router-dom'

export function Card({ data = {} }) {
	return (
		<>
			<div className='cardTitle'>
				<h2>
					{data.title} <span>⭐</span>
				</h2>
				<div className='cardDescription'>
					<h3>Description:</h3>
					<span>{data.description}</span>
				</div>
			</div>
			<div>
				<h3>Speakers</h3>
				<div className='cardSpeakers'>
					<div className=''>{data.speakers}</div>
					{/* {data.speakers.map((speaker, index) => (
						<span key={index}>{speaker}</span>
					))} */}
				</div>
			</div>
			<div className='cardDetails'>
				<h3>Industry Segment: {data.industry_segment}</h3>
				<h3>Primary Topic: {data.primary_topic}</h3>
				<h3>Session Type: {data.session_type}</h3>
				<h3>Audience Type: {data.industry_segment}</h3>
				<h3>lenguage: {data.lenguage}</h3>
				<h3>Audience Level:{data.audience_level}</h3>
				<h3>Date: {data.date}</h3>
			</div>
			<button>
				<Link to={`/details/${data.id}`}>Details</Link>
			</button>
		</>
	)
}
