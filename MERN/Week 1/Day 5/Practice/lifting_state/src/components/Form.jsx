import {useState} from 'react';

const Form = ({setElement}) => {
    const [newElement,setNewElement]=useState({
        color:'',
        height:'',
        width:''
    })
    console.log(newElement);
    const formHandler=(e)=>{
        e.preventDefault();
        setNewElement({
            color:'#000000',
        height:'',
        width:''
        })
    }
return (
    <div>
        <form onSubmit={formHandler}>
            <label>Color</label>
            <input type="color" 
                onChange={(e)=>setNewElement({...newElement,color:e.target.value})}
                value={newElement.color}/>
            <label>Height</label>
            <input type="number" onChange={(e)=>setNewElement({...newElement,height:e.target.value+'px'})} value={newElement.height}/>
            <label>Width</label>
            <input type="number" onChange={(e)=>setNewElement({...newElement,width:e.target.value+'px'})} value={newElement.width}/>
            <button>Submit</button>
        </form>
    </div>
)
}

export default Form