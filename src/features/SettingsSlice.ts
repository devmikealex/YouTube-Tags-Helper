import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    LineByLine: false,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setLineByLine: (state) => {
            state.LineByLine = !state.LineByLine
        },
        resetSettings: () => {
            return initialState
        },
        loadSettings: (state, action: PayloadAction<typeof initialState>) => {
            return (state = action.payload)
        },
    },
})

export const { setLineByLine, resetSettings, loadSettings } = settingsSlice.actions
export default settingsSlice.reducer
