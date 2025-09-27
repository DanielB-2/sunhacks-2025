import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './Components/TopBar'
import { MainPage } from './Components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        
       
      </div>
      
    </div>
  )
}
      
export default App
