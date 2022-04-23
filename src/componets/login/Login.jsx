import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [state, setState] = useState("hello");
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const sumbit = (e) => {
        e.preventDefault();
        alert(state + " " + password)

        if(state === "admin" && password === "admin" ){
            navigate("/create-new-add")
        }else{
            setError(true )

        }
    }

    const handleEmail = (e) => {
        setState(e.target.value)
        
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (

        <form onSubmit={sumbit} className='container mt-5'>
            <div className='md-3'>
                <label htmlFor="">
                    <input
                        value={state}
                        onChange={handleEmail}
                        className="form-control"
                        placeholder="@gmail0"

                        type="" />

                </label>
            </div>
            <div className='md-3'>
                <label className="form-label">
                    Email addres
                    <input
                        value={password}
                        className="form-control"
                        placeholder="@gmail0"
                        onChange={handlePassword}
                        type="password"  />
                </label>
            </div>
            {
                true ? <div>sft</div> : ""
            }

            <div class="d-grid gap-2 d-md-block">
                
                <button  class="btn btn-primary" type="submit">Button</button>
            </div>
        </form>

    )


}

