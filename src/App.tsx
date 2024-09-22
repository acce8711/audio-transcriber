import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Steps from './components/Steps'
import { StepsProvider } from './context/StepsContext'

function App() {

  return (
    <>
      <StepsProvider>
        <Steps />
      </StepsProvider>
    </>

    
  )
}

export default App
