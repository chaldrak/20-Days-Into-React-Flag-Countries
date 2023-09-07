import React from 'react'
import Countries from '/src/constants/countries.json'
import { useState } from 'react'


const CountriesButtons = ({ onclick }) => {
    
    const countrieKey = (Object.keys(Countries))
    return (

        <div className = "btnDiv">
            {
                countrieKey.map((item, idx) => (
                    <button onClick = { () => onclick (item) } className = "btn" type="button" key= {idx}> {item} </button>
                )

                )
                }
        </div>
        
        
    )

}

export default CountriesButtons