import { useEffect, useState } from 'react'
import { getData } from '../../helpers/getData'
import { url } from '../../helpers/url'

export function useInitialState() {
	const [data, setData] = useState([])

	useEffect(() => {
		getData(url)
			.then((data) => setData(data))
			.catch((error) => console.log(error))
	}, [])

	return { data, setData }
}
