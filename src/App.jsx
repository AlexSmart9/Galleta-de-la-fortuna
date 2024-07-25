
import { useState } from 'react'
import quotes from './data/phrases.json'
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import photos from './data/photos.json'
import BtnPhrase from './components/BtnPhrase'






function App() {
  const randomPhrase = getRandomNumber(quotes.length)
  const [phraseSelected, setPhraseSelected] = useState(quotes[randomPhrase])
  const [bgColor, setBgColor] = useState(photos[getRandomNumber(photos.length)])

  const objStyles= {backgroundImage:`url(/img/fondo${bgColor}.png)` }
  


  return (
    <div style = {objStyles}
         className='min-h-screen bg-cover bg-center flex justify-center items-center px-4'>
      <h1 className='absolute top-20 text-3xl uppercase font-black text-center drop-shadow-lg stroke text-indigo-950 '>
        Galleta de la suerte</h1>
      <article className='max-w-[400px] bg-white p-6 rounded-xl shadow-2xl'>
     
      <Phrase phraseSelected = {phraseSelected} />
      <BtnPhrase setPhraseSelected={setPhraseSelected} setBgColor={setBgColor}/>
      </article>
      <footer className='absolute bottom-20 bg-indigo-950/75 p-5 rounded-lg text-white'>
          <p>{phraseSelected.author}</p>
      </footer>
    </div>
  )
}

export default App
