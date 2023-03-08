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
            state.tags = action.payload.split(', ')
        },
    },
})

export const { setTags } = tagsSlice.actions
export default tagsSlice.reducer
