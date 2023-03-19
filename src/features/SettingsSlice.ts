import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const initSettings = {
    LineByLine: false,
    CaseSensitive: false,
    AutoCloseMenu: true,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: initSettings,
    reducers: {
        setLineByLine: (state) => {
            state.LineByLine = !state.LineByLine
        },
        setCaseSensitive: (state) => {
            state.CaseSensitive = !state.CaseSensitive
        },
        setAutoCloseMenu: (state) => {
            state.AutoCloseMenu = !state.AutoCloseMenu
        },
        resetSettings: () => {
            return initSettings
        },
        loadSettings: (state, action: PayloadAction<typeof initSettings>) => {
            return (state = action.payload)
        },
    },
})

export const {
    setLineByLine,
    setCaseSensitive,
    setAutoCloseMenu,
    resetSettings,
    loadSettings,
} = settingsSlice.actions
export default settingsSlice.reducer
