
import './Card.scss'

const Card = ({ data, id, addChar }) => {


    console.log(data);
    return (
        <div className='card'>
            <h3>{data.name}</h3>
            <img alt='' src={data.thumbnail.path + '.jpg'}></img>
            <button>Info</button>
            <button onClick={() => addChar(id)}>Add</button>
        </div>
    )
}

export { Card }