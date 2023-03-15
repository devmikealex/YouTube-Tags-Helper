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
        { text: 'java', id: genGetID.next().value },
        { text: 'JavaScript', id: genGetID.next().value },
        { text: 'Программист', id: genGetID.next().value },
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
        clearTags: (state) => {
            state.tags = []
        },
        sortTags: (state) => {
            state.tags.sort((a, b) => a.text.localeCompare(b.text))
        },
        sortLenTags: (state) => {
            state.tags.sort((a, b) => a.text.length - b.text.length)
        },
        removeDupTags: (state) => {
            const seen = new Set()
            state.tags = state.tags.filter((tag) => {
                // const text = tag.text.toLocaleLowerCase()
                const text = tag.text
                const duplicate = seen.has(text)
                if (!duplicate) seen.add(text)
                return !duplicate
            })
        },
        filterInTags: (state, action: PayloadAction<string>) => {
            state.tags = state.tags.filter((tag) =>
                tag.text.toLocaleLowerCase().includes(action.payload)
            )
        },
        filterOutTags: (state, action: PayloadAction<string>) => {
            state.tags = state.tags.filter(
                (tag) => !tag.text.toLocaleLowerCase().includes(action.payload)
            )
        },
    },
})

export const {
    setTags,
    removeTag,
    addTags,
    clearTags,
    sortTags,
    sortLenTags,
    removeDupTags,
    filterInTags,
    filterOutTags,
} = tagsSlice.actions
export default tagsSlice.reducer
