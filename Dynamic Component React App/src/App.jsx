import './App.css'
import Image from './components/LifeCycle/image'
import Text from './components/LifeCycle/Text'
import { useState } from 'react'
function App() {
  let[state,setState] =useState(true)
  return (
    <div >
       <div className='maindiv'>
      {state ? <Image /> : <Text />}
      <button className='btn btn-primary' style={{marginRight:"10px"}} onClick={()=>{setState(true)}}>Image Comp</button>
      <button className='btn btn-primary' onClick={()=>{setState(false)}}>Text Comp</button>
      </div>
       
    </div>
  )
}

export default App
