import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { filterDate } from '../../helpers/filterDate'
import { getData } from '../../helpers/getData'
import { url } from '../../helpers/url'
import { InputDate, LinkStyled, SelectContainer } from '../../styles/styles'

export function FilterDate() {
	const { data, setData } = useContext(AppContext)
	const { date } = useParams()

	const [filter, setFilter] = useState([])

	useEffect(() => {
		getData(url).then((data) => {
			setFilter(data)
		})
	}, [])

	useEffect(() => {
		const formatDate = new Date(date)
		const test = filterDate(data, formatDate)
		setData(test)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [date])

	return (
		<SelectContainer>
			<InputDate>
				<input className='Iselect' id='tag' type='radio' name='tag' />
				<label htmlFor='tag'>All data</label>
			</InputDate>
			{filter.map(({ id, date }, index) => {
				const formatDate = new Date(date)
				const year = formatDate.getFullYear()
				const month = formatDate.toLocaleString('default', { month: 'long' })

				return (
					<InputDate key={id}>
						<input className='Iselect' type='radio' id={index} name='tag' value={date} />
						<label htmlFor={index}>
							<LinkStyled to={`/${date}`} value={formatDate}>
								{`${month} ${year}`}
							</LinkStyled>
						</label>
					</InputDate>
				)
			})}
		</SelectContainer>
	)
}
