import { configureStore } from '@reduxjs/toolkit'
import tagsSlice from '../features/tagsSlice'

const store = configureStore({
    reducer: {
        tagList: tagsSlice,
    },
    // devTools
    // preloadedState
})

export type RootState = ReturnType<typeof store.getState>

export default store
