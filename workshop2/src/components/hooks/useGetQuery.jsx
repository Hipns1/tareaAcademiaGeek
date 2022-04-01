import { useRef } from 'react'
import useFilterData from './useFilterData'

export function useGetQuery() {
	const { setQuery } = useFilterData()
	const Inputref = useRef('')
	const { current } = Inputref

	const getQuery = () => {
		const query = current
		console.log(query)
	}
	return { Inputref, getQuery }
}
