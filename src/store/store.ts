import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { TEST } from './actions'

const initialState = { test: '12345' }

function reducer1(state = initialState, action) {
    console.log('reducer1 action:', action)
    switch (action.type) {
        case TEST:
            console.log('TEST')
            return { ...state, test: 'new - ' + Date.now() }
            break
        default:
            return state
    }
}

export const mainReducer = combineReducers({ reducer1 })

export default createStore(mainReducer)
