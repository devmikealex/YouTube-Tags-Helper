import { useSelector, useDispatch } from 'react-redux'

import './App.css'
import { testAction } from './store/actions'
import { State } from './store/store'

function App() {
    const test: String = useSelector((state: State) => state.reducer1.test)
    console.log('🚀 test:', test)
    const dispatch = useDispatch()

    function click(event: React.MouseEvent<HTMLButtonElement>) {
        console.log('click')
        dispatch(testAction())
    }

    return (
        <div className='App'>
            <h2>{test}</h2>
            <button onClick={click}>test</button>
        </div>
    )
}

export default App
