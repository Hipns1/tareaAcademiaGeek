import { createContext } from 'react'
import { useInitialState } from '../components/hooks/useInitialState'

const AppContext = createContext()

const AppProvider = ({ children }) => {
	const initialState = useInitialState()

	return <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
