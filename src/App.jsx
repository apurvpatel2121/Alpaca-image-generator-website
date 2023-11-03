import { useEffect, useState } from 'react'
import './App.css'
import { accessories } from "./assets/data"


function App() {
  const [data, setData] = useState(accessories)
  const [index, setIndex] = useState(0)
  const [bg, setBg] = useState("default")
  const [ears, setEars] = useState("default")
  const [hair, setHair] = useState("default")
  const [neck, setNeck] = useState("default")
  const [nose, setNose] = useState("default")
  const [mouth, setMouth] = useState("default")
  const [eyes, setEyes] = useState("default")
  const [leg, setLeg] = useState("default")
  const [accessorie, setAccessorie] = useState("default")
  const [accessorie2, setAccessorie2] = useState("default")

  useEffect(() => {
    const dataClone = [...data]
    dataClone.map(attr => {
      attr.items[0].selected = true
    })
    setData(dataClone)
  }, [])

  function handleChange(item) {
    console.log("first")
    data[index].items.map(i => i.selected = false)
    item.selected = true
    console.log(data[index].label)
    switch (data[index].label) {
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
      case "accessories2":
        setAccessorie2(item.img)
        break;

      default:
        break;
    }
  }

  return (
    <div className='main'>

      {/* navbar */}
      <nav>
        <h1 className='header'>Alpaca Image Generator</h1>
      </nav>

    <div className='container'>
      
      <div className='leftContainer'>
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
          <img src={"images/accessories/" + accessorie2 + ".png"} alt="" className='accessories' />
        </section>

        <div className='download'>
          <button className='btn downloadBtn'>Download</button>
        </div>
      </div>

      <div className='rightContainer'>
        <section className='buttonSection'>
          <div className='accessorizeContainer'>
            <h1 className='title'>Accessorize your Alpaca</h1>
            <div className='buttons'>
              {
                data.map((attribute, index) => {
                  return (
                    <button key={index} className={attribute.selected ? "btn active" : "btn"}
                      onClick={() => {
                        data.map(i => i.selected = false);
                        setIndex(index)
                        data[index].selected = true
                      }}>{attribute.label}</button>
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
                data[index].items.map((item, index) => {
                  return (
                    <button key={index} className={item.selected ? "btn active" : "btn"} onClick={(e) => {
                      handleChange(item)
                    }}>{item.img}</button>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>


      </div>

    </div>
  )
}

export default App