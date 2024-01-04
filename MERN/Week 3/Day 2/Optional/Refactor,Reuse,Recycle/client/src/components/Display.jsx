import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Display = () => {
    const [product,setProduct]=useState({
        title:'',
        price:'',
        description:''
    })
    const [allProducts,setAllProducts]=useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res=>setAllProducts(res.data))
        .catch(err=>console.log(err));
    },[]);
    const formHandler=e=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create",product)
        .then(res=>{
            axios.get('http://localhost:8000/api/products')
        .then(res=>setAllProducts(res.data))
        .catch(err=>console.log(err));
        setProduct({
            title:'',
            price:'',
            description:''
        });
        })
        .catch(err=>console.log(err));
    }
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
            <div>
                {allProducts&&(allProducts.map(product=>{
                    return(
                        <div><Link key={product._id} to={`/products/${product._id}`}>{product.title}</Link> <br /></div>
                    )
                }))}
            </div>
        </div>
    )
}

export default Display