import Background from './components/Background'
import Cards from './components/Cards'
import './index.css'

import { Analytics } from "@vercel/analytics/react"

document.body.style.overflow = 'hidden'

const App = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full h-full flex justify-center items-center fixed'>
        <Cards/>
      </div>

      <Background/>
      <Analytics/>
    </div>
  )
}

export default App
