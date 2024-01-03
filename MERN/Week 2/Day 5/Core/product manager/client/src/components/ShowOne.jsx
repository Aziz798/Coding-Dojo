import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ShowOne = () => {
    const nav=useNavigate();

    const [oneProduct, setOneProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setOneProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);
    const goEdit=e=>{
        e.preventDefault();
        nav(`/products/${oneProduct._id}/edit`);
    };
    const deleteProducts=()=>{
        axios.delete(`http://localhost:8000/api/products/${id}`).then(res=>nav('/products')).catch(err=>console.log(err));
    }
    return (
        <div>
            {oneProduct && (
                <div>
                    <h2>{oneProduct.title}</h2>
                    <h4>{oneProduct.price}</h4>
                    <p>{oneProduct.description}</p>
                    <button onClick={goEdit}>Edit</button>
                    <button onClick={deleteProducts}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ShowOne