import './SmallCard.scss'


const SmallCard = ({ data, id, remove }) => {

    console.log(data);

    return (
        <div className='small-card'>
            <img alt='' src={data.thumbnail.path + '.jpg'}></img>
            <h4>{data.name}</h4>
            <div>
                <button onClick={() => remove(id)}>X</button>
            </div>
        </div>

    )
}

export { SmallCard }