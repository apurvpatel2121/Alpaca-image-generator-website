import { useEffect, useMemo, useState } from 'react'
import './App.css'
import data from "./assets/data"
import { toPng } from 'html-to-image'
import download from 'downloadjs'
import AlpacaImage from './components/AlpacaImage'
import Button from './components/Button'

function App() {
  const [index, setIndex] = useState(0)
  const [images, setImages] = useState({})

  useEffect(() => {
    // assign default to each object
    const defaultImages = {}
    data.forEach((item) => {
      defaultImages[item.label] = { img: "default", btn: 0 }
    })
    setImages(defaultImages)
  }, [])

  function downloadImage() {
    const alpacaCanvasNode = document.getElementById('mainSection')
    toPng(alpacaCanvasNode).then(dataUrl => {
      download(dataUrl, 'my-alpaca.png')
    })
  }

  function handleChange(item, i) {
    setImages((prevImages) => ({
      ...prevImages,
      [data[index].label]: {
        ...prevImages[data[index].label],
        img: item,
        btn: i,
      },
    }));
  }


  function getImageUrl(item) {
    const imageUrl = useMemo(() => {
      return `i/mages/${item.label}/${images[item.label]?.img ?? 'default'}.png`
    }, [images])
    return imageUrl;
  }



  return (
    <div className='main'>

      {/* navbar */}
      <nav>
        <h1 className='header'>Alpaca Image Generator</h1>
      </nav>

      <div className='container'>

        <div className='leftContainer'>
          <section className='mainSection' id='mainSection'>
            {data.map((item) => {
              return (
                <AlpacaImage key={item.label} item={item} getImageUrl={getImageUrl} />
              )
            })}
          </section>

          <div className='download'>
            <button className='btn downloadBtn' onClick={() => downloadImage()}>Download</button>
          </div>
        </div>

        <div className='rightContainer'>
          <section className='buttonSection'>
            <div className='accessorizeContainer'>
              <h1 className='title'>Accessorize your Alpaca</h1>
              <div className='buttons'>
                {
                  data.map((attribute, i) => {
                    return (
                      <Button
                      key={i} 
                      label={attribute.label}
                      active={index === i}
                      onclick={() => {setIndex(i)}}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className='backgroundContainer'>
              <h1 className='title'>{data[index].label}</h1>
              <div className='buttons'>
                {
                  data[index].items.map((item, i) => {
                    return (
                      <Button 
                      key={item} 
                      label={item}
                      active={images[data[index].label]?.btn === i} 
                      onclick={(e) => {handleChange(item, i)}}
                      />
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