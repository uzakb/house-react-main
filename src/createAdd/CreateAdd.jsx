import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Createadd({create}) {

    const navigate = useNavigate()


        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [price, setPrice] = useState('')
        const [image, setImage] = useState('')
        
    
   



    const sumbit = (e) => {
        e.preventDefault();
        fetch('https://625eaacf3b039517f1fa0762.mockapi.io/house',{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            title,
            description,
            price,
            image,
            

        })
    })
    .then((res) =>{
        if(res.status === 201){
            alert("Success")
            navigate("/")


        }

    })
}

    return (
        <form  onSubmit={sumbit} className='container'> 
      <div className="mb-3"> 
        <label 
         className="form-label">
             Title
         </label> 
         
        <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control" 
          placeholder="Title"
        /> 
      </div> 
      <div className="mb-3"> 
        <label className="form-label">Price</label> 
        <input 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
         className="form-control"
          placeholder="Price" 
          /> 
      </div> 
      <div className="mb-3"> 
        <label className="form-label">Price</label> 
        <input 
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
         className="form-control"
          placeholder="Image" 
          /> 
      </div> 
      <div className="mb-3"> 
        <label className="form-label">Description</label> 
        <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control" 
        rows="3">
            </textarea> 
      </div> 
      <button type='submit' className="btn btn-success w-100" >
           + Создать
           </button> 
    </form>
    );
}



