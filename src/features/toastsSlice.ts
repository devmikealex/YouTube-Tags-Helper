import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import getID from '../utils/getid'

export interface IToast {
    id: number
    message: string
}

interface ToastState {
    toasts: IToast[]
}

const genGetID = getID(5000)

export const initToasts: ToastState = {
    toasts: [
        // { message: 'Test message 1', id: genGetID.next().value },
        // { message: 'Test message 2', id: genGetID.next().value },
        // {
        //     message:
        //         'Test message 2 asdf asdf asdf ad asdf ad assdfgsdfgdf adf adf adf ad fads asd ads',
        //     id: genGetID.next().value,
        // },
        // {
        //     message: 'Test message 2 asdf asdf asdfdf ad fads asdfgsdfgsd ads',
        //     id: genGetID.next().value,
        // },
    ],
}

const initialState: ToastState = {
    toasts: [],
}

export const tagsSlice = createSlice({
    name: 'toastsList',
    initialState,
    reducers: {
        addToast: (state, action: PayloadAction<IToast>) => {
            // state.toasts.push({ message: action.payload, id: genGetID.next().value })
            state.toasts.push(action.payload)
        },
        removeToast: (state, action: PayloadAction<number>) => {
            const id = action.payload
            const newToast = state.toasts.filter((t) => t.id !== id)
            state.toasts = newToast
        },
    },
})

export const { removeToast, addToast } = tagsSlice.actions
export default tagsSlice.reducer
