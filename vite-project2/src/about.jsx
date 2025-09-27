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
      <div class="flex flex-row h-200">
        <div class="rounded-4x1 flex-1 text-center content-around">
            <h1>What is Recyclix</h1>
        </div>
        <div class="rounded-4x1 flex-1 text-left">
            <p>Recyclix is a website that encourages users to recycle. By giving user's points for recycling correctly they can compete angainst friends.</p>
        </div>
    </div>
      <div>
        <TopBar />
      </div>
      <div>
        <MainPage></MainPage>
      </div>
      
      
    </div>
  )
}
      
export default App
