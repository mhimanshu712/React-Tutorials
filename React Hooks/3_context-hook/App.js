import React from 'react'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App
