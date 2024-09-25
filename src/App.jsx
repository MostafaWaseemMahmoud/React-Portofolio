import { useState } from 'react'
import './App.css'
import SideBar from './components/AsideBar/Sidebar'
import Main from './components/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <SideBar />
    <Main />
    </div>
  )
}

export default App
