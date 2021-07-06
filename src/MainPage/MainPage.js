import { Header } from '../Components/Header/Header';
import { Search } from '../Components/Search/Search';
import { Card } from '../Components/Card/Card';
import { SmallCard } from '../Components/SmallCard/SmallCard';
import { useState, useEffect } from 'react'

import './MainPage.scss'


const MainPage = () => {

    const [added, setAdded] = useState([])
    const [data, setData] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        fetch('http://gateway.marvel.com/v1/public/characters?apikey=e47d55b269862549127bf29d0a8bfb29')
            .then(resposne => resposne.json())
            .then(data => data.data.results.map((e) => {
                return e
            }))
            .then(data => setData(data))
    }, [])


    console.log(data);

    const add = (id) => {
        const card = data.find(e => e.id === id);
        added.includes(card) ? setAdded([...added]) : setAdded([...added, card])
    }

    const remove = (id) => {
        setAdded(added.filter((e) => e.id !== id))
    }



    return (
        <div>
            <Header />
            <Search />
            <div className='wrapper'>
                <div className='kartice-na-stranici'>
                    {data.map((e) => {
                        return <Card data={e} id={e.id} addChar={add} />
                    })}
                </div>
                <div className='added'>
                    <h3>Selected heroes:</h3>
                    {added.map(e => {
                        return <SmallCard data={e} id={e.id} remove={remove} />
                    })}

                </div>
            </div>
        </div>
    )
}

export { MainPage }