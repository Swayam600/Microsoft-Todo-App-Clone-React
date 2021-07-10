import React, { createContext, useReducer } from 'react'

export const Context = createContext() 

export function ContextProvider({ initialState, reducer, children }) {
	return (
		<Context.Provider value={useReducer(reducer, initialState)}>
			{children}
		</Context.Provider>
	)
}
