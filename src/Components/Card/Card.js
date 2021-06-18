import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ data, id, addChar, getInfo }) => {


    return (
        <div className='card'>
            <h3>{data.name}</h3>
            <img alt='' src={data.thumbnail.path + '.jpg'}></img>
            <Link to={`/single-character/${id}`}><button>Info</button></Link>
            <button onClick={() => addChar(id)}>Add</button>
        </div>
    )
}

export { Card }