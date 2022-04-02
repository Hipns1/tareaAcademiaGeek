import FilterContainer from '../FilterContainer'
import { CardList } from '../CardList'
import { DivBody } from '../../styles/styles'
import { AppProvider } from '../../context/AppContext'

export function Home() {
	return (
		<DivBody>
			<AppProvider>
				<FilterContainer />
				<CardList />
			</AppProvider>
		</DivBody>
	)
}
