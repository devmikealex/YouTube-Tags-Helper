import { configureStore } from '@reduxjs/toolkit'
import tagsSlice, { ITag, initTags } from '../features/tagsSlice'

const preloadedState = {
    tagList: initTags,
}

const store = configureStore({
    reducer: {
        tagList: tagsSlice,
    },
    // devTools
    preloadedState,
})

export type RootState = ReturnType<typeof store.getState>

export default store
