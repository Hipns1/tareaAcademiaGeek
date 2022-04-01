import { Card } from '../Card'
import { FilterDate } from '../FilterDate'
import useFilterData from '../hooks/useFilterData'

export function CardList() {
	// const { data } = useGetData()
	const { filterData } = useFilterData()

	return (
		<section className=''>
			<FilterDate />
			<div className='cardListGrid'>
				{filterData.map((sessions) => (
					<article className='cardContainer' key={sessions.id}>
						<Card data={sessions} />
					</article>
				))}
			</div>
		</section>
	)
}
