import './App.css'
import SaveLoad from './components/SaveLoad'
import Settings from './components/Settings'
import TagsInput from './components/TagsInput'
import TagsOutput from './components/TagsOutput'
import ToastsList from './components/ToastsList'

function App() {
    return (
        <div className='m-2'>
            <h1 className='text-2xl font-medium text-center text-red-700'>
                YouTube Tags Helper
            </h1>
            <div className='text-center max-w-xl overflow-hidden mx-auto text-sm'>
                Useful utility for easy work with YouTube tags. It can automatically sort
                tags, remove duplicates, convert lists from different separation formats.
                <SaveLoad />
            </div>
            <TagsInput />
            <Settings />
            <TagsOutput />
            <ToastsList />
        </div>
    )
}

export default App
