import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


export default function Cord(){
    const {id} = useParams();
    const [house, setHouse ] = useState(null);
    console.log();
    useEffect(()  => {
        fetch('https://625eaacf3b039517f1fa0762.mockapi.io/house/'+ id)
        .then( (res) => res.json())
        .then((data) => {
            setHouse(data)

        })
    }, [id]);
    if(house === null){
        return <h1> Loging....</h1>
    }
    return (
        <div className='container mt-5'>
            <img src= {house.image} alt="" />
            <h1>{house.title}</h1>
            
        </div>
    )
}



