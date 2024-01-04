import { Link, useNavigate,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

const Create = () => {
    const {id}= useParams();
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const nav = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=>setName(res.data.name))
        .catch(err=>console.log(err));
    },[id]);
    const formHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}/update`, { name })
            .then(res => {
                setName("");
                nav('/authors')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errArray = [];
                for (const key of Object.keys(errorResponse)) {
                    errArray.push(errorResponse[key].message);
                }
                setError(errArray);
            })
    };
    return (

        <div>
            <Link to='/authors'>Home</Link>
            {error && (error.map((err, idx) => <li style={{ color: 'red' }} key={idx}>{err}</li>))}
            <form onSubmit={formHandler}>
                <div>
                    <h4>Name : </h4>
                    <input onChange={e => setName(e.target.value)} value={name} />
                    <div>
                        <Link to='/authors'>Cancel</Link>
                        <button>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create