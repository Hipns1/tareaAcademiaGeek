
import { DivCards, DivDescription, DivOthers, DivSpeakers, DivTitle, LinkStyled } from '../../styles/styles'

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
			<DivOthers>
				<h3>Industry Segment: <span>{data.industry_segment}</span></h3>
				<h3>Primary Topic: <span>{data.primary_topic}</span></h3>
				<h3>Session Type: <span>{data.session_type}</span></h3>
				<h3>Audience Type: <span>{data.industry_segment}</span></h3>
				<h3>lenguage: <span>{data.lenguage}</span></h3>
				<h3>Audience Level: <span>{data.audience_level}</span></h3>
				<h3>Date: <span>{data.date}</span></h3>
			</DivOthers>
		</DivCards>
	)
}
