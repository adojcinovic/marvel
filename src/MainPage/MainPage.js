import { Header } from '../Components/Header/Header';
import { Search } from '../Components/Search/Search';
import { Card } from '../Components/Card/Card';
import { SmallCard } from '../Components/SmallCard/SmallCard';
import { useState } from 'react'

import './MainPage.scss'


const MainPage = ({ data }) => {
    const [cardId, setCardId] = useState()
    const [added, setAdded] = useState([])

    console.log(added);

    const add = (id) => {
        const char = added.find(e => e.id === id)
        if (char) setAdded([...added])
        else setAdded([...added, char])
    }



    return (
        <div>
            <Header />
            <Search />
            <div className='wrapper'>
                <div className='kartice-na-stranici'>
                    {data.map((e) => {
                        return <Card data={e} id={e.id} addChar={setAdded} />
                    })}
                </div>
                <div className='added'>
                    <h3>Samo odabrani:</h3>
                    <SmallCard data={data} id={cardId} />
                </div>
            </div>
        </div>
    )
}

export { MainPage }