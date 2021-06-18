import './SmallCard.scss'


const SmallCard = ({ data, id }) => {



    return (
        data.map((e) => {
            return (
                <div className='small-card'>
                    <img alt='' src={e.thumbnail.path + '.jpg'}></img>
                    <h4>{e.name}</h4>
                </div>
            )
        })
    )
}

export { SmallCard }