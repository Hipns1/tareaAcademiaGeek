
import { DivCards, DivDescription, DivSpeakers, DivTitle, LinkStyled } from '../../styles/styles'

export function Card({ data = {} }) {
	return (
		<DivCards>
			<DivTitle>
				<LinkStyled to={`/details/${data.id}`}><h1>{data.title} </h1></LinkStyled>
				<span>⭐</span>
			</DivTitle>
			<DivDescription>
				<h3>Description: <span>{data.description}</span></h3>
			</DivDescription>
			<DivSpeakers>
				<h1>{data.speakers}</h1>	
			</DivSpeakers>
			<div>
				<h3>Industry Segment: {data.industry_segment}</h3>
				<h3>Primary Topic: {data.primary_topic}</h3>
				<h3>Session Type: {data.session_type}</h3>
				<h3>Audience Type: {data.industry_segment}</h3>
				<h3>lenguage: {data.lenguage}</h3>
				<h3>Audience Level:{data.audience_level}</h3>
				<h3>Date: {data.date}</h3>
			</div>
		</DivCards>
	)
}
