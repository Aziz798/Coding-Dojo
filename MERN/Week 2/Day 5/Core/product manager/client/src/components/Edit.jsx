import { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const Edit = () => {
    const nav = useNavigate();
    const {id}=useParams();
    const [product,setProduct]=useState({
        title:'',
        price:'',
        description:''
    })
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`).then(res=>setProduct(res.data))
        .catch(err=>console.log(err));
    },[id])
    const formHandler=e=>{
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}/update`).then(res=>{
            setProduct({
                title:'',
                price:'',
                description:''
            });
            nav('/products');
        })
    };
    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label>Title: </label>
                    <input onChange={(e)=>setProduct({...product,title:e.target.value})} value={product.title}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" onChange={(e)=>setProduct({...product,price:e.target.value})} value={product.price}/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea onChange={e=>setProduct({...product,description:e.target.value})} value={product.description}></textarea>
                </div>
                <button>Create</button>
            </form>
        </div>
    )
}

export default Edit