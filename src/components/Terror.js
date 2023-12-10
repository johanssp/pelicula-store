import React from 'react'
import { useParams } from 'react-router-dom'

const Terror = () => {
  const {id}= useParams();
  return (
    <div>
     <h3>este producto es el id : {id}</h3>
    </div>
  )
}

export default Terror
