import { useState } from 'react'

import Header from './compont/Header'
import Contenrtwo from './compont/Contenrtwo'
import Contenrthree from './compont/Contenrthree'
import Contenrfour from './compont/Contenrfour'
import Contenrfive from './compont/Contenrfive'
import Contenrsex from './compont/Contenrsex'
import Footer from './compont/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Contenrtwo/>
    <Contenrthree/>
    <Contenrfour/>
    <Contenrfive/>
    <Contenrsex/>
    <Footer/>
    
    </>
  )
}

export default App
