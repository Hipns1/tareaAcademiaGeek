import { useGetData } from './useGetData'

export function useGetDetails(idCard) {
	const { data } = useGetData()

	return data.find(({ id }) => id === idCard)
}
