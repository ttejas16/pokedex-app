import React from "react";
import Data from "./Data";
export default function Card({pName,id}){
    if(pName || id){

        return(
            <div className="card">
                <Data pokemonName={pName} id={id} />
            </div>
        )
    }
    return(
        null
    )
}