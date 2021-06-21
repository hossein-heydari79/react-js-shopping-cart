import React from 'react'
import './Card.css'

export const Card = () => {
    return (

        <div className="card">
            <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" className="card-img" />
            <p>Midi sundress with shirring detail</p>
            <div className="addToCard">
                <p>$29.9</p>
                <button>Add To Card</button>
            </div>
        </div>
    )
}
