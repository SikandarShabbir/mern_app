import React, {createContext, useReducer} from 'react'

export const AppContext = createContext()

export const appReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUTS':
            return {
                workouts: state.workouts.filter(w => w._id !== action.payload._id)
            }

        default:
            return state
    }
}

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, {workouts: []})
    return (
        <AppContext.Provider value={{...state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}