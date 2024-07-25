
import getRandomNumber from '../utils/getRandomNumber'
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({setPhraseSelected, setBgColor}) => {
  const changePhrase = () => {
    const phraseRandom = getRandomNumber(quotes.length)
    const indexRandom = quotes[phraseRandom]
    setPhraseSelected(indexRandom)
    setBgColor(photos[getRandomNumber(photos.length)])
  }
  return (
    <button className='hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-800
             py-2 px-4 rounded-xl text-white' 
            onClick={changePhrase}>Abrir otra</button>
  )
}

export default BtnPhrase