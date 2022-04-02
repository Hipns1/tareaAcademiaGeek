import { DivBusqueda, DivInput, InputStyled } from '../styles/styles'
import useFilterData from './hooks/useFilterData'

const FilterBusqueda = () => {
	const { inputRef, getQuery } = useFilterData()
	return (
		<div>
			<DivBusqueda>
				<h1>Filters</h1>
				<DivInput>
					<InputStyled onChange={getQuery} type='text' placeholder='Search' ref={inputRef} />
				</DivInput>
			</DivBusqueda>
		</div>
	)
}

export default FilterBusqueda
