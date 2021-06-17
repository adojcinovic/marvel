import './SingleCharacter.scss'
import { Hero } from '../Components/Hero/Hero'
import { ShowComics } from '../Components/ShowComics/ShowComics'
import { Comics } from '../Components/Comics/Comics'

const SingleCharacter = () => {
    return (
        <div>
            <Hero />
            <ShowComics />
            <Comics />
        </div>
    )
}

export { SingleCharacter }