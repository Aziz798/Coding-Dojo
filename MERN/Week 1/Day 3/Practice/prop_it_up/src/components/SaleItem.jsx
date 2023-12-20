import React from 'react'

const SaleItem = (props) => {
    const {prop1}=props;
    return (
    <div>
        <h1>{prop1.lastName} {prop1.firstName}</h1>
        <h4>Age : {prop1.age}</h4>
        <h4>Hair color : {prop1.hairColor}</h4>
    </div>
);
}

export default SaleItem