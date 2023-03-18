import { useDispatch } from 'react-redux'
import { loadSettings } from '../features/SettingsSlice'
import { loadTags, resetTags } from '../features/tagsSlice'
import store from '../store/store'
import { loadState, resetSavedState, saveState } from '../utils/localStorage'

const style = 'hover:bg-indigo-200 py-1 px-2'

function SaveLoad() {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                className={style}
                onClick={() => {
                    const tagsInput = document.getElementById(
                        'tags-input'
                    ) as HTMLTextAreaElement
                    const tagsLine: string = tagsInput.value
                    const state = store.getState()
                    saveState({
                        ...state,
                        toastsList: { toasts: [] },
                        tagsInput: tagsLine,
                    })
                }}
            >
                Save
            </button>
            <button
                className={style}
                onClick={() => {
                    const tagsInput = document.getElementById(
                        'tags-input'
                    ) as HTMLTextAreaElement
                    const state = loadState()
                    console.log('🚀 loadState:', state)
                    if (state?.tagList) dispatch(loadTags(state.tagList))
                    if (state?.settings) dispatch(loadSettings(state.settings))
                    if (state?.tagsInput) tagsInput.value = state.tagsInput
                }}
            >
                Load
            </button>
            <button
                className={style}
                onClick={() => {
                    resetSavedState()
                }}
            >
                Delete
            </button>
        </div>
    )
}

export default SaveLoad
