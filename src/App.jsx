import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      
        <ChakraProvider>
          <Header/>
          <Main/>
          <Footer/>
        </ChakraProvider>
      
    
      
  )
}

export default App
