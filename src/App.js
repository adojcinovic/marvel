import './App.scss';
import { MainPage } from './MainPage/MainPage'
import { SingleCharacter } from './SingleCharacter/SingleCharacter'
import { useState, useEffect } from 'react'
function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('http://gateway.marvel.com/v1/public/characters?apikey=e47d55b269862549127bf29d0a8bfb29')
      .then(resposne => resposne.json())
      .then(data => data.data.results.map((e) => {
        return e
      }))
      .then(data => setData(data))
  }, [])

  console.log(data);
  return (

    <div className="App">
      <MainPage data={data} />
      <SingleCharacter data={data} />
    </div>
  );
}

export default App;
