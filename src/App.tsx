import './App.css'
import Settings from './components/Settings'
import TagsCount from './components/TagsCount'
import TagsInput from './components/TagsInput'
import TagsOutput from './components/TagsOutput'
import Toast from './components/Toast'

function App() {
    return (
        <div className='m-2'>
            <h1 className='text-2xl font-medium text-center text-red-700'>
                YouTube Tags Helper
            </h1>
            <TagsInput />
            <Settings />
            <TagsOutput />
            <Toast message='Test message for Toast' />
        </div>
    )
}

export default App
