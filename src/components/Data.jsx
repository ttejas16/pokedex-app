import React from "react";
import { useState, useEffect } from "react";


export default function Data({ pokemonName,id }) {
    if(pokemonName){
        pokemonName = pokemonName.toLowerCase();
    }
    const [pokemonData, setPokemonData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        let res;
        if(id){
            res = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        else{
            res = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }
        res.then((response) => {
            response.json()
                .then((data) => {
                    setPokemonData(data);
                    setLoading(false);
                    // console.log(data);
                })
        })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    if (isLoading) {
        return (
            <div className="card-data">
                <p>loading data</p>
            </div>
        )
    }
    const imgURL = pokemonData.sprites.other['official-artwork'].front_default;
    // console.log(pokemonData.sprites.other['official-artwork'].front_default);
    return (
        <div className="card-data">
            <img src={imgURL} alt="" />
            <p>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</p>
        </div>
    )


}
