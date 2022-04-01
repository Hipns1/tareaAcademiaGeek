import { DivRight } from '../../styles/styles'
import { Card } from '../Card'
import { FilterDate } from '../FilterDate'
import useFilterData from '../hooks/useFilterData'

export function CardList() {
	const { filterData } = useFilterData()

	return (
		<DivRight>
			<FilterDate />
			<div className='cardListGrid'>
				{filterData.map((sessions) => (
					<article className='cardContainer' key={sessions.id}>
						<Card data={sessions} />
					</article>
				))}
			</div>
		</DivRight>
	)
}
