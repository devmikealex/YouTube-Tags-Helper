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

const genGetID = getID(100)

export const initTags: TagsState = {
    tags: [
        { text: 'JavaScript', id: genGetID.next().value },
        { text: 'Element 3D', id: genGetID.next().value },
        { text: 'русский', id: genGetID.next().value },
        { text: 'урок', id: genGetID.next().value },
        { text: 'окно на чердак', id: genGetID.next().value },
        { text: '46546465', id: genGetID.next().value },
        { text: '123', id: genGetID.next().value },
        { text: 'React', id: genGetID.next().value },
        { text: 'программист', id: genGetID.next().value },
    ],
}

const initialState: TagsState = {
    tags: [],
}

export const tagsSlice = createSlice({
    name: 'tagList',
    initialState,
    reducers: {
        setTags: (state, action: PayloadAction<string>) => {
            if (action.payload) {
                const tags = action.payload.split(', ')
                state.tags = tags.map((tagText): ITag => {
                    return { text: tagText, id: genGetID.next().value }
                })
            }
        },
        addTags: (state, action: PayloadAction<string>) => {
            if (action.payload) {
                const tags = action.payload.split(', ')
                const newTags = tags.map((tagText): ITag => {
                    return { text: tagText, id: genGetID.next().value }
                })
                state.tags = [...state.tags, ...newTags]
            }
        },
        removeTag: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const newTags = state.tags.filter((tag) => tag.id !== id)
            state.tags = newTags
        },
    },
})

export const { setTags, removeTag, addTags } = tagsSlice.actions
export default tagsSlice.reducer
