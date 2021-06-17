import { Header } from '../Components/Header/Header';
import { Search } from '../Components/Search/Search';
import { Cards } from '../Components/Cards/Cards';
import { SmallCard } from '../Components/SmallCard/SmallCard'

import './MainPage.scss'


const MainPage = ({ data }) => {
    return (
        <div>
            <Header />
            <Search />
            <div className='wrapper'>
                <Cards data={data} />
                <SmallCard />
            </div>
        </div>
    )
}

export { MainPage }