import { DivBusqueda, DivInput, InputStyled } from '../styles/styles'

const FilterBusqueda = () => {
	return (
		<div>
			<DivBusqueda>
				<h1>Filters</h1>
				<DivInput>
					<InputStyled placeholder='Search' />
				</DivInput>
			</DivBusqueda>
		</div>
	)
}

export default FilterBusqueda
