import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { DivRight } from '../../styles/styles'
import { Card } from '../Card'
import { FilterDate } from '../FilterDate'

export function CardList() {
	const { data } = useContext(AppContext)

	return (
		<DivRight>
			<FilterDate />
			<div className='cardListGrid'>
				{data.map((sessions) => (
					<article className='cardContainer' key={sessions.id}>
						<Card data={sessions} />
					</article>
				))}
			</div>
		</DivRight>
	)
}
