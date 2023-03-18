import { useDispatch } from 'react-redux'
import { loadSettings } from '../features/SettingsSlice'
import { loadTags } from '../features/tagsSlice'
import store from '../store/store'
import createToast from '../utils/createToast'
import { loadState, resetSavedState, saveState } from '../utils/localStorage'
import Tooltip from './Tooltip'

const style = 'hover:bg-indigo-200 py-1 px-2'

function save() {
    const tagsInput = document.querySelector('#tags-input') as HTMLTextAreaElement
    const tagsLine: string = tagsInput.value
    const state = store.getState()
    saveState({
        ...state,
        toastsList: { toasts: [] },
        tagsInput: tagsLine,
    })
}

function load(dispatch: Function): boolean {
    const tagsInput = document.querySelector('#tags-input') as HTMLTextAreaElement
    const state = loadState()
    console.info('LOADSTATE:', state)
    if (!state) return false
    if (state?.tagList) dispatch(loadTags(state.tagList))
    if (state?.settings) dispatch(loadSettings(state.settings))
    if (state?.tagsInput) tagsInput.value = state.tagsInput
    return true
}

function SaveLoad() {
    const dispatch = useDispatch()

    return (
        <div>
            <Tooltip text='Save the state in the browser'>
                <button
                    className={style}
                    onClick={() => {
                        save()
                        createToast(`The data saving`, dispatch)
                    }}
                >
                    Save
                </button>
            </Tooltip>
            <Tooltip text='Load a saved state'>
                <button
                    className={style}
                    onClick={() => {
                        let text
                        if (load(dispatch)) text = `The data is loaded`
                        else text = 'No data available'
                        createToast(text, dispatch)
                    }}
                >
                    Load
                </button>
            </Tooltip>
            <Tooltip text='Delete a saved state'>
                <button
                    className={style}
                    onClick={() => {
                        resetSavedState()
                        createToast(`Deleting saved data`, dispatch)
                    }}
                >
                    Delete
                </button>
            </Tooltip>
        </div>
    )
}

export default SaveLoad
