import { configureStore } from '@reduxjs/toolkit'
import tagsSlice, { initTags } from '../features/tagsSlice'
import settingsSlice from '../features/SettingsSlice'

const preloadedState = {
    tagList: initTags,
}

const store = configureStore({
    reducer: {
        tagList: tagsSlice,
        settings: settingsSlice,
    },
    // devTools
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>

export default store
