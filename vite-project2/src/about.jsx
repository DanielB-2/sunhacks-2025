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
      <div class="flex flex-row h-80 flex-wrap">
        <div class="min-w-100 rounded-4x1 flex-1 text-center content-around px-32">
            <h1 class="text-4xl">What is Recyclix</h1>
        </div>
        <div class="text-wrap min-w-100 rounded-4x1 flex-1 text-left content-around px-32">
            <p class="text-l">Recyclix is a website that encourages users to recycle. By giving user's points for recycling correctly they can compete angainst friends.</p>
        </div>
    </div>

    <div class="flex flex-row h-80 flex-wrap">
        <div class="min-w-100 rounded-4x1 flex-1 text-center content-around px-32">
            <p class="text-l">Recyclix was made by Anirudh Gali, Pratyush Grover, and Daniel Briggs for sunhacks 2025 at ASU</p>
        </div>
        <div class="text-wrap min-w-100 rounded-4x1 flex-1 text-left content-around px-32">
            
            <h1 class="text-4xl">Who Made Recyclix</h1>
        </div>
    </div>
    </div>
  )
}
      
export default App
