import './SingleCharacter.scss'
import { Hero } from '../Components/Hero/Hero'
import { ShowComics } from '../Components/ShowComics/ShowComics'
import { Comics } from '../Components/Comics/Comics'
import { useEffect, useState } from 'react'

const SingleCharacter = (props) => {
    const { id } = props.match.params;

    const [character, setCharacter] = useState()

    useEffect(() => {
        fetch(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=e47d55b269862549127bf29d0a8bfb29`)
            .then(resposne => resposne.json())
            .then(data => setCharacter(data.data.results[0]))
    }, [])

    console.log(id);


    return (
        < div className='single-character' >
            <p></p>
        </div >
    )

}

export { SingleCharacter }