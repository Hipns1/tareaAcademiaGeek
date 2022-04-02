import { useState, useRef } from 'react'
import { useGetData } from './useGetData'

export default function useFilterData() {
	const [query, setQuery] = useState('')
	const inputRef = useRef('')
	const { data } = useGetData()

	const getQuery = () => {
		const { current } = inputRef
		const { value } = current
		setQuery(value)
	}

	let filterData =
		data.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())) || data

	console.log(query)
	console.log(filterData)

	return { query, inputRef, filterData, getQuery, setQuery }
}
