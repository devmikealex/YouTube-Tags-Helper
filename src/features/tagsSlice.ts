import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TagsState {
    tags: string[]
}

const initialState: TagsState = {
    tags: ['JavaScript', 'TypeScript', 'After Effects'],
}

export const tagsSlice = createSlice({
    name: 'tagList',
    initialState,
    reducers: {
        setTags: (state, action: PayloadAction<string>) => {
            // TODO разбить на массив стрингов
            if (action.payload) state.tags = action.payload.split(', ')
        },
        removeTag: (state, action: PayloadAction<string>) => {
            const id = action.payload
            console.log('🚀 ~ file: tagsSlice.ts:22 ~ id:', id)
            // state.tags.filter((tag) => {})
        },
    },
})

export const { setTags, removeTag } = tagsSlice.actions
export default tagsSlice.reducer
