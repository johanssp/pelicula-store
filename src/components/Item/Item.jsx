import React from 'react'
import{Link} from 'react-router-dom'

const Item = () => {
  return (
    <Link to={'/item/'+ item.id } className =''>
    <div className=''>
      <img src={item.imagen} alt={item.nombre}/>
      <p children=''>{item.nombre}</p>
      
    </div>
    </Link>
  )
}

export default Item
