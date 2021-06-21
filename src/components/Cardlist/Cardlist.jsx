import React from 'react'
import './Cardlist.css'

export const Cardlist = () => {
    return (
        <div className="card-list">
            <div className="list-card-chooiced">
                <div className="img">
                    <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" style={{ width: '50px', marginRight: '20px' }} alt="" />
                </div>
                <div className="detail">
                    <p>Midi sundress with ruched front</p>
                    <div className="count">
                        <p>$18.9 x 1</p>
                        <button>remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
