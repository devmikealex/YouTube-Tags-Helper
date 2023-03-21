import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAutoCloseMenu } from '../features/SettingsSlice'
import { RootState } from '../store/store'
import HelpModal from './HelpModal'
import ThreePoints from './icons/ThreePoints'
import SaveLoad from './SaveLoad'
import Toggle from './Toggle'
import Tooltip from './Tooltip'

function SpeedDial() {
    const menuRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    function onChangeHandlerAutoCloseMenu(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setAutoCloseMenu())
    }

    const AutoCloseMenu = useSelector((state: RootState) => state.settings.AutoCloseMenu)

    return (
        <div
            data-dial-init
            className='fixed top-2 right-4 group lg:top-4'
            onMouseLeave={(e) => {
                if (menuRef.current && AutoCloseMenu)
                    menuRef.current.classList.add('hidden')
            }}
        >
            {/* <div className='flex justify-end'> */}
            <div className='flex flex-col justify-end items-end lg:items-center lg:flex-row'>
                <HelpModal />
                <button
                    className='flex items-center justify-center text-white bg-indigo-600 rounded-full w-10 h-10 hover:bg-indigo-700 focus:outline-none'
                    onClick={(e) => {
                        if (menuRef.current) menuRef.current.classList.toggle('hidden')
                    }}
                >
                    <ThreePoints w='w-6' h='h-6' />
                </button>
            </div>
            <div
                id='speed-dial-menu-dropdown'
                ref={menuRef}
                className='flex flex-col justify-start hidden py-1 mt-2 space-y-2 bg-white border border-gray-400 rounded-lg shadow-lg'
            >
                <SaveLoad className='flex flex-col p-2' />
                <Tooltip text='Close the menu automatically'>
                    <Toggle
                        className='px-2'
                        title='Auto Close'
                        checked={AutoCloseMenu}
                        onChangeHandler={onChangeHandlerAutoCloseMenu}
                    />
                </Tooltip>
            </div>
        </div>
    )
}

export default SpeedDial
