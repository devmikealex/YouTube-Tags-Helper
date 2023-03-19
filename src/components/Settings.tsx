import { useDispatch, useSelector } from 'react-redux'
import { setCaseSensitive, setLineByLine } from '../features/SettingsSlice'
import { RootState } from '../store/store'
import Toggle from './Toggle'
import Tooltip from './Tooltip'

function Settings() {
    const dispatch = useDispatch()

    function onChangeHandlerLineByLine(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setLineByLine())
    }

    function onChangeHandlerCaseSensitive(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setCaseSensitive())
    }

    const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)
    const CaseSensitive = useSelector((state: RootState) => state.settings.CaseSensitive)

    return (
        <div className='m-1 mt-4 px-4 flex space-x-4'>
            <Toggle
                title='Line By Line'
                checked={LineByLine}
                onChangeHandler={onChangeHandlerLineByLine}
            />
            <Tooltip text='Case sensitive when searching for duplicates'>
                <Toggle
                    title='Case Sensitive'
                    checked={CaseSensitive}
                    onChangeHandler={onChangeHandlerCaseSensitive}
                />
            </Tooltip>
        </div>
    )
}

export default Settings
