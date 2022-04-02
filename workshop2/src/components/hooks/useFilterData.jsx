import { useState, useRef, useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'

export default function useFilterData() {
	const { data, setData } = useContext(AppContext)
	const [query, setQuery] = useState('')
	const inputRef = useRef('')

	const getQuery = () => {
		const { current } = inputRef
		const { value } = current
		setQuery(value)
	}

	useEffect(() => {
		let filterData =
			data.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())) || data
		setData(filterData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	return { query, inputRef, getQuery, setQuery }
}
