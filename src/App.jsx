import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [index, setIndex] = useState(0)
  const [bg, setBg] = useState("default")
  const [ears, setEars] = useState("default")
  const [hair, setHair] = useState("default")
  const [neck, setNeck] = useState("default")
  const [nose, setNose] = useState("nose")
  const [mouth, setMouth] = useState("default")
  const [eyes, setEyes] = useState("default")
  const [leg, setLeg] = useState("default")
  const [accessorie, setAccessorie] = useState("default")

  const accessories = [
    {
      id: 0,
      label: "backgrounds",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "blue50" },
        { id: 2, img: "blue60", },
        { id: 3, img: "blue70", },
        { id: 4, img: "green60", },
        { id: 5, img: "green70", },
        { id: 6, img: "grey40", },
        { id: 7, img: "grey70", },
        { id: 8, img: "grey80", },
        { id: 9, img: "red50", },
        { id: 10, img: "red60", },
        { id: 11, img: "red70", },
        { id: 13, img: "yellow50", },
        { id: 14, img: "yellow60", },
        { id: 15, img: "yellow70", },
      ]
    },
    {
      id: 1,
      label: "ears",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "tilt-backward" },
        { id: 2, img: "tilt-forward" }
      ]
    },
    {
      id: 2,
      label: "hair",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "bang" },
        { id: 2, img: "curls" },
        { id: 3, img: "elegant" },
        { id: 4, img: "fancy" },
        { id: 5, img: "short" },
      ]
    },
    {
      id: 3,
      label: "neck",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "bend-backward" },
        { id: 2, img: "bend-forward" },
        { id: 3, img: "thick" },
      ]
    },
    {
      id: 4,
      label: "nose",
      items: [
        { id: 0, img: "nose" }
      ]
    },
    {
      id: 5,
      label: "mouth",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "astonished" },
        { id: 2, img: "eating" },
        { id: 3, img: "laugh" },
        { id: 4, img: "tongue" },
      ]
    },
    {
      id: 6,
      label: "eyes",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "angry" },
        { id: 2, img: "naughty" },
        { id: 3, img: "panda" },
        { id: 4, img: "smart" },
        { id: 5, img: "star" },
      ]
    },
    {
      id: 7,
      label: "leg",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "bubble-tea" },
        { id: 2, img: "cookie" },
        { id: 3, img: "game-console" },
        { id: 4, img: "tilt-backward" },
        { id: 5, img: "tilt-forward" },
      ]
    },
    {
      id: 8,
      label: "accessories",
      items: [
        { id: 0, img: "default" },
        { id: 1, img: "earings" },
        { id: 2, img: "flower" },
        { id: 3, img: "glasses" },
        { id: 4, img: "headphone" },
      ]
    },

  ]
  function handleChange(item) {
    switch (accessories[index].label) {
      case "backgrounds":
        setBg(item.img)
        break;
      case "ears":
        setEars(item.img)
        break;
      case "hair":
        setHair(item.img)
        break;
      case "neck":
        setNeck(item.img)
        break;
      case "nose":
        setNose(item.img)
        break;
      case "mouth":
        setMouth(item.img)
        break;
      case "eyes":
        setEyes(item.img)
        break;
      case "leg":
        setLeg(item.img)
        break;
      case "accessories":
        setAccessorie(item.img)
        break;
      default:
        break;
    }
  }
  
  const filteredItems = accessories.map(accessory => {
    return {
      selectedItems: accessory.items.filter(item => item.selected),
      label: accessory.label
    }
  })



  return (
    <div className='main'>

      {/* navbar */}
      <nav>
        <h1 className='header'>Alpaca Image Generator</h1>
      </nav>

      <section className='mainSection'>
        <img src={"images/backgrounds/" + bg + ".png"} alt="" className='background' />
        <img src={"images/ears/" + ears + ".png"} alt="" className='ears' />
        <img src={"images/hair/" + hair + ".png"} alt="" className='hair' />
        <img src={"images/neck/" + neck + ".png"} alt="" className='neck' />
        <img src={"images/" + nose + ".png"} alt="" className='nose' />
        <img src={"images/mouth/" + mouth + ".png"} alt="" className='mouth' />
        <img src={"images/eyes/" + eyes + ".png"} alt="" className='eyes' />
        <img src={"images/leg/" + leg + ".png"} alt="" className='leg' />
        <img src={"images/accessories/" + accessorie + ".png"} alt="" className='accessories' />
      </section>


      <div className='download'>
        <button className='btn downloadBtn'>Download</button>
      </div>

      <section className='buttonSection'>
        <div className='accessorizeContainer'>
          <h1 className='title'>Accessorize your Alpaca</h1>
          <div className='buttons'>
            {
              accessories.map((item, index) => {
                return (
                  <button key={index} className='btn' onClick={() => setIndex(index)}>{item.label}</button>
                )
              })
            }
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div className='backgroundContainer'>
          <h1 className='title'>Backgrounds</h1>
          <div className='buttons'>
            {
              accessories[index].items.map((item, index) => {
                return (
                  <button key={index} className='btn' onClick={(e) => {
                    handleChange(item)
                  }}>{item.img}</button>
                )
              })
            }
          </div>
        </div>
      </section>


    </div>
  )
}

export default App