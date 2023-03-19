import { useDispatch, useSelector } from 'react-redux'
import { setLineByLine } from '../features/SettingsSlice'
import { RootState } from '../store/store'

export interface ToggleProps {
    title: string
    checked: boolean
    onChangeHandler: Function
    className?: string
}

function Toggle(props: ToggleProps) {
    // const dispatch = useDispatch()
    // const LineByLine = useSelector((state: RootState) => state.settings.LineByLine)
    return (
        <div className={props.className}>
            <label className='relative inline-flex items-center cursor-pointer'>
                <input
                    type='checkbox'
                    value=''
                    className='sr-only peer'
                    checked={props.checked}
                    onChange={(e) => props.onChangeHandler(e)}
                    // onChange={(e) => {
                    //     dispatch(setLineByLine())
                    // }}
                />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
                <span className='ml-2 text-sm font-medium text-gray-900'>
                    {props.title}
                </span>
            </label>
        </div>
    )
}

export default Toggle
