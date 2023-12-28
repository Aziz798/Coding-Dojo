import React from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import image from "../image.jpg"

const Display = () => {
    const { option, id } = useParams();
    const [display, setDisplay] = useState(null);
    const [planet,setPlanet]=useState(null);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${option}/${id}`)
            .then(res =>{
                setDisplay(res.data);
                if(display){
                    axios.get(display.homeworld).then(res=>setPlanet(res.data.name)).catch(err=>console.log(err))
                }
            })
            .catch(error => {
                setDisplay(null);
                setError("These aren't the droids you're looking for");
            });
    }, [option, id,planet,display]);

    return (
        <div>
            {error ? (
                <div>
                    <p>{error}</p>
                    <img style={{height:'300px'}} src={image} alt="aaaa" />

                </div>
            ) : (
                <div>
                    {display && (option === 'people' ? (
                        <div>
                            <h4>Name: {display.name}</h4>
                            <h4>Height: {display.height}</h4>
                            <h4>Mass: {display.mass}</h4>
                            <h4>Hair Color: {display.hair_color}</h4>
                            <h4>Skin Color : {display.skin_color}</h4>
                            <Link to={`/${display.homeworld.substring(22)}`}> home LAND{planet}</Link>
                        </div>
                    ) : (
                        <div>
                            <h4>Name:{display.name}</h4>
                            <h4>Climate: {display.climate}</h4>
                            <h4>Terrain: {display.terrain}</h4>
                            <h4>Surface water: {display.surface_water}</h4>
                            <h4>Population: {display.population}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Display;
