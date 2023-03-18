import { RootState } from '../store/store'

const STORAGE_LABEL = 'YouTube_Tags_Helper'

interface RootStateSave extends RootState {
    tagsInput: string
}

export function saveState(state: RootStateSave) {
    // const newState: RootStateSave = { ...state, toastsList: { toasts: [] } }
    localStorage.setItem(STORAGE_LABEL, JSON.stringify(state))
}

export function loadState(): RootStateSave | undefined {
    const t = localStorage.getItem(STORAGE_LABEL)
    if (t) {
        const newSate: RootStateSave = JSON.parse(t)
        return newSate
    } else {
        console.warn(`Settings ${STORAGE_LABEL} Not found`)
        return undefined
    }
}

export function resetSavedState() {
    localStorage.removeItem(STORAGE_LABEL)
}
