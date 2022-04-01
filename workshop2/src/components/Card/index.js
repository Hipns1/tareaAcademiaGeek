import { useGetData } from '../hooks/useGetData'
import './CardStyles.css'
export function Card() {
	const { data } = useGetData()
	console.log(data[0])
	return (
		<>
			{data.map((sessions) => (
				<article className='cardContainer' key={sessions.id}>
					<div className='cardTitle'>
						<h2>
							{sessions.title} <span>⭐</span>
						</h2>
						<div className='cardDescription'>
							<h3>Description:</h3>
							<span>{sessions.description}</span>
						</div>
					</div>
					<div>
						<h3>Speakers</h3>
						<div className='cardSpeakers'>
							{sessions.speakers.map((speaker, index) => (
								<span key={index}>{speaker}</span>
							))}
						</div>
					</div>
					<div className='cardDetails'>
						<h3>Industry Segment: {sessions.industry_segment}</h3>
						<h3>Primary Topic: {sessions.primary_topic}</h3>
						<h3>Session Type: {sessions.session_type}</h3>
						<h3>Audience Type: {sessions.industry_segment}</h3>
						<h3>lenguage: {sessions.lenguage}</h3>
						<h3>Audience Level:{sessions.audience_level}</h3>
						<h3>Date: {sessions.date}</h3>
					</div>
					<button>Details</button>
				</article>
			))}
		</>
	)
}
