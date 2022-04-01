import { Card } from '../Card'
import { FilterDate } from '../FilterDate'
import useFilterData from '../hooks/useFilterData'
// import { useGetData } from '../hooks/useGetData'
import './CardList.css'
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
