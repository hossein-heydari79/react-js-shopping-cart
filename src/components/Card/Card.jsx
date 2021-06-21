import React from 'react'
import './Card.css'

export const Card = ({ id, url, description, price }) => {
    return (

        <div className="card">
            <img src={url} className="card-img" />
            <p>{description}</p>
            <div className="addToCard">
                <p>${price}</p>
                <button>Add To Card</button>
            </div>
        </div>
    )
}
