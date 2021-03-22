import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Display = ({type, id}) => {

    const [json, setJson] = useState({
        name: "loading..."
    });

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(res => {
                console.log(res);
                setJson(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [type, id]);


    return (
        <div>
            <h3>Hello this is Display!</h3>
            <div>
                <p>{json.name}</p>

                { type === "people" && loaded ?
                    <>
                        <p>Height: {json.height}</p>
                        <p>Mass: {json.mass}</p>
                        <p>Hair Color: {json.hair_color}</p>
                        <p>Skin Color: {json.skin_color}</p>
                    </> : <></>
                }

                { type === "planets" && loaded ?
                    <>
                         <p>Climate: {json.climate}</p>
                         <p>Terrain: {json.terrain}</p>
                         <p>Surface Water: {json.surface_water}</p>
                         <p>Population: {json.population}</p>
                    </> : <></>
                }

            </div>
        </div>
    )
}

export default Display;