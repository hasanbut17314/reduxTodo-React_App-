import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'
import { store } from './app/Store'
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <h1 className='text-3xl text-white bg-gray-800 p-4'>Redux - Toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
