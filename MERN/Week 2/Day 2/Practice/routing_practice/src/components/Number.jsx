import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
    const {id,text,color} = useParams();
  return (
    <div style={{background:color}}>
        {isNaN(id)?<p style={{color:text}}>The word is {id}</p>:<p style={{color:text}}>The Number is : {id}</p>}
    </div>
  )
}

export default Number