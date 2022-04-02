import FilterContainer from '../FilterContainer'
import { CardList } from '../CardList'
import { DivBody } from '../../styles/styles'

export function Home() {
	return (
		<DivBody>
			<FilterContainer />
			<CardList />
		</DivBody>
	)
}
