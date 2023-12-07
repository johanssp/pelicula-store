import { useState , useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import movie from './Json/movie.json'
import ItemList from '../components/ItemList/ItemList'

const ItemListContainer = () => {
  
   const [item , setItem] = useState([]);
   const {id} = useParams();

  useEffect (()=>{

    const fetchData = async()=>{
      try{
        const data = await new Promise ( (resolve)=>{
          setTimeout(()=>{
          resolve( id ? movie.filter(item => item.genero === id): movie)
          }, 2000);

        });
        setItem( data);
      }catch(error){
        console.log("Error", error);
      }


    };
    fetchData();
    
  },[id]);
  
  return (
    <div className=''>
     <div className=''> 
     <ItemList item = {item}/>

     </div>
    </div>
  )
}

export default ItemListContainer
