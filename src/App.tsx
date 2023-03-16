import './App.css'
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
            <TagsInput />
            <Settings />
            <TagsOutput />
            <ToastsList />
        </div>
    )
}

export default App
