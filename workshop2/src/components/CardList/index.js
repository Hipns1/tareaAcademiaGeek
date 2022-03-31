import { Card } from '../Card'
import { FilterDate } from '../FilterDate'
import './CardList.css'
export function CardList() {
	return (
		<section className=''>
			<FilterDate />
			<div className='cardListGrid'>
				<Card />
			</div>
		</section>
	)
}
