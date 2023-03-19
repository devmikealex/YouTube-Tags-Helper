import { configureStore } from '@reduxjs/toolkit'
import tagsSlice, { initTags } from '../features/tagsSlice'
import settingsSlice, { initSettings } from '../features/SettingsSlice'
import toastsSlice, { initToasts } from '../features/toastsSlice'

const preloadedState = {
    tagList: initTags,
    settings: initSettings,
    toastsList: initToasts,
}

const store = configureStore({
    reducer: {
        tagList: tagsSlice,
        settings: settingsSlice,
        toastsList: toastsSlice,
    },
    // devTools
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>

export default store
