import './App.css'
import Settings from './components/Settings'
import TagsInput from './components/TagsInput'
import TagsOutput from './components/TagsOutput'
import ToastsList from './components/ToastsList'
import SpeedDial from './components/SpeedDial'

function App() {
    return (
        <div className='m-2'>
            {/* <div className='flex justify-center items-baseline space-x-2'>
                <h1 className='text-2xl font-medium text-center text-red-700'>
                    YouTube Tags Helper
                </h1>
                <HelpModal />
            </div> */}
            <h1 className='text-2xl font-medium text-center text-red-700'>
                YouTube Tags Helper
            </h1>
            <div className='text-center max-w-[260px] lg:max-w-xl overflow-hidden mx-auto text-sm'>
                Useful utility for easy work with YouTube tags. It can automatically sort
                tags, remove duplicates, convert lists from different separation formats.
            </div>
            <TagsInput />
            <Settings />
            <TagsOutput />
            <ToastsList />
            <SpeedDial />
        </div>
    )
}

export default App
