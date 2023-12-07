import React from 'react'
import Item from '../Item/Item'

const ItemList = () => {
  return (
    <div className=''>
      {item.map(item=> 
      <div className='' key={item.id}>
        <Item item={item}/>

      </div>
      )}
      
    </div>
  )
}

export default ItemList
