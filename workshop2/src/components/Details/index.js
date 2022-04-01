import { useGetDetails } from '../hooks/useGetDetails'
import { useParams } from 'react-router-dom'
import { Card } from '../Card'

export function Details() {
	let { id } = useParams()
	const data = useGetDetails(id)

	return <Card data={data} />
}
