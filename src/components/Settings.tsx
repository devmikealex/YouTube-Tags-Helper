import { useDispatch, useSelector } from 'react-redux'
import { setLineByLine } from '../features/SettingsSlice'
import { RootState } from '../store/store'
import Toggle from './Toggle'

function Settings() {
    const dispatch = useDispatch()

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setLineByLine())
    }
    const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)

    return (
        <div className='m-1 mt-4 px-4'>
            <Toggle
                title='Line By Line'
                checked={LineByLine}
                onChangeHandler={onChangeHandler}
            />
        </div>
    )
}

export default Settings
