import { useGetDetails } from '../hooks/useGetDetails'
import { useParams } from 'react-router-dom'
import { Card } from '../Card'
import { useNavigate } from 'react-router-dom'
import { DivDetails } from '../../styles/styles'
export function Details() {
	let { id } = useParams()
	const data = useGetDetails(id)


	const navigate = useNavigate();

	const handleReturn = () => {
		navigate(-1);
	}

	return (
		<DivDetails>
			<button onClick={() => handleReturn()}>BACK TO SESSION CATALOG</button>
			<Card data={data} />
		</DivDetails>
	)
}
