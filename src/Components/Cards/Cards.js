import './Cards.scss'

const Cards = ({ data }) => {

    // const [cardData, setCardData] = useState({})


    const cardData = (data) => {
        return (
            data.map((e) => {
                return {
                    name: e.name,
                    id: e.id,
                    comics: e.comics,
                    img: e.thumbnail.path + '.jpg'
                }
            })
        )
    }

    const createCard = (data) => {
        return (
            data.map((e) => {
                return (
                    <div className='card'>
                        <h3>{e.name}</h3>
                        <img alt='' src={e.img}></img>
                        <button>Info</button>
                        <button>Add</button>
                    </div>
                )
            })


        )
    }

    const card = cardData(data)
    console.log(card);

    return (
        <div className='kartice-na-stranici'>
            {createCard(card)}
        </div>
    )
}

export { Cards }