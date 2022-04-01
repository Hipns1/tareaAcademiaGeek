import { useState } from 'react'
import { useGetData } from './useGetData'

export default function useFilterData() {
	const { data } = useGetData()
	const [query, setQuery] = useState('')

	const filterData =
		data.filter((data) => data.title.toLowerCase().includes(query.toLowerCase())) || data
	return { filterData, setQuery }
}
