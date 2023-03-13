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
    },
})

export const { setLineByLine } = settingsSlice.actions
export default settingsSlice.reducer
