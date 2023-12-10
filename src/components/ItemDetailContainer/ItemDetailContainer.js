
import { useState , useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import movie from '../Json/movie.json'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item , setItem] = useState([]);
  const {id} = useParams();

 useEffect (()=>{
  const promesa= new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(movie.find(item=> item.id===parseInt(id)))
    }, 2000)
  });
  promesa.then((data)=>{
    setItem(data)
  })

   
   
 },[id]);
 
 return (
   <div className=''>
    <div className=''> 
    <ItemDetail item = {item}/>

    </div>
   </div>
 )
}


export default ItemDetailContainer
