import React from "react";
import { useState } from "react";
function Types( { temp } ){
    let i=1;
    return(
        temp.map((element)=>{
            return(
                <p key={i++} className={element}>{element.charAt(0).toUpperCase() + element.slice(1)}</p>
            )
       })
    )
}
export default function Description({ pokemonData }) {
    function generateClass(){
        let str = [];
        pokemonData.types.forEach((element)=>{
            str.push(element.type['name']);
        })
        return str
    }
    
    if (pokemonData.initial) {
        return null;
    }
    else if(pokemonData.err){
        return (
            <div className="wrap">
                <div className="description-wrapper error">
                    <p>The Pokemon you are trying to search does not exist in our records<br/>
                        <span>try :</span><br/>
                        <span>1. Checking spelling of Pokemon</span><br/>
                        <span>2. Searching another Pokemon</span> 
                    </p>    
                </div>
            </div>
        )
    }
    else if (Object.keys(pokemonData).length !== 0) { 
        const classNames = generateClass();
        return (
        <div className="wrap">
            <div className="description-wrapper">
                <h1>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h1>
                <img src={pokemonData.sprites.other['official-artwork'].front_default} alt="" />
                <div className="types">
                    <Types temp={classNames} />
                </div>
                <div className="info">
                    <ul className="abilties">
                    <p>Abilities</p>
                    <hr className="divider" />
                        <li>{pokemonData.abilities[0].ability.name.charAt(0).toUpperCase() + pokemonData.abilities[0].ability.name.slice(1)}</li>
                        <li>{pokemonData.abilities[1] ? pokemonData.abilities[1].ability.name.charAt(0).toUpperCase() + pokemonData.abilities[1].ability.name.slice(1):'None'}</li>
                    </ul>
                    <ul className="details">
                    <p>Details</p>
                    <hr className="divider" />
                        <li>Height : {pokemonData.height}m</li>
                        <li>Weight : {pokemonData.weight}kg</li>
                        <li>Exp    : {pokemonData.base_experience}pts</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    } else if (Object.keys(pokemonData).length === 0) {
        return (
            <div className="wrap">
                <div className="description-wrapper error">
                    <p>Loading...</p>    
                </div>
            </div>
        )
    }

}