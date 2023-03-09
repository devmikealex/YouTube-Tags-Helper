import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import getID from '../utils/getid'

export interface ITag {
    text: string
    id: number
}

interface TagsState {
    tags: ITag[]
}

const genGetID = getID()

const initialState: TagsState = {
    tags: [],
}

export const tagsSlice = createSlice({
    name: 'tagList',
    initialState,
    reducers: {
        setTags: (state, action: PayloadAction<string>) => {
            const tags = action.payload.split(', ')
            if (action.payload)
                state.tags = tags.map((tagText): ITag => {
                    return { text: tagText, id: genGetID.next().value }
                })
        },
        removeTag: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const newTags = state.tags.filter((tag) => tag.id !== id)
            state.tags = newTags
        },
    },
})

export const { setTags, removeTag } = tagsSlice.actions
export default tagsSlice.reducer
