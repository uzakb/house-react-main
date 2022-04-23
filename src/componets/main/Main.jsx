import Card from "../card/Card"
import { useEffect, useState } from "react";

export const Main  = () => {
  const [houses,setHouses] = useState([]);
    
    useEffect(() => {
      fetch("https://625eaacf3b039517f1fa0762.mockapi.io/house")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error)=> console.log(error))

     
      
    }, []);
    
   return (
 <main className='container mt-5'>
         <h2 className='text-center'>Последние объявления</h2>
         <div className='mt-5 row'>
             
          {
            houses.map((item) => <Card
             img={item.image}
             id={item.id}
             title={item.title}
             description={item.description}
             price={item.price}
             />)
          }
         </div>
 
       </main>
   )
 }