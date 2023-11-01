import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>

      {/* navbar */}
      <nav>
        <h1 className='header'>Alpaca Image Generator</h1>
      </nav>

      <section className='mainSection'>
        <img src="images/backgrounds/blue50.png" alt="" className='background' />
        <img src="images/ears/default.png" alt="" className='ears' />
        <img src="images/hair/default.png" alt="" className='hair' />
        <img src="images/neck/default.png" alt="" className='neck' />
        <img src="images/nose.png" alt="" className='nose' />
        <img src="images/mouth/default.png" alt="" className='mouth' />
        <img src="images/eyes/default.png" alt="" className='eyes' />
        <img src="images/leg/default.png" alt="" className='leg' />
        <img src="images/accessories/headphone.png" alt="" className='accessories' />
      </section>


      <div className='download'>
        <button className='btn downloadBtn'>Download</button>
      </div>

      <section className='buttonSection'>
        <div className='accessorizeContainer'>
          <h1 className='title'>Accessorize your Alpaca</h1>
          <div className='buttons'>
            <button className='btn'>Backgrounds</button>
            <button className='btn'>Ears</button>
            <button className='btn'>Eyes</button>
            <button className='btn'>Hair</button>
            <button className='btn'>Leg</button>
            <button className='btn'>Mouth</button>
            <button className='btn'>Neck</button>
            <button className='btn'>Accessories</button>
            <button className='btn'>Nose</button>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className='backgroundContainer'>
          <h1 className='title'>Backgrounds</h1>
          <div className='buttons'>
            <button className='btn'>Backgrounds</button>
            <button className='btn'>Ears</button>
            <button className='btn'>Eyes</button>
            <button className='btn'>Hair</button>
            <button className='btn'>Leg</button>
            <button className='btn'>Mouth</button>
            <button className='btn'>Neck</button>
            <button className='btn'>Accessories</button>
            <button className='btn'>Nose</button>
          </div>

        </div>
      </section>


    </div>
  )
}

export default App
