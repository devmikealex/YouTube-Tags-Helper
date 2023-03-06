import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { ActionRDX, TEST } from './actions'

export interface State {
    reducer1: { test: string }
}

const initialState = { test: '12345' }

function reducer1(state = initialState, action: ActionRDX) {
    console.log('reducer1 action:', action)
    switch (action.type) {
        case TEST:
            console.log('Action > ' + TEST)
            return { ...state, test: 'new - ' + Date.now() }
        default:
            return state
    }
}

export const mainReducer = combineReducers<State>({ reducer1 })

export default createStore(mainReducer)
