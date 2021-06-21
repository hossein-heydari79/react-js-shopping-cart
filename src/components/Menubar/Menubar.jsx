import React from 'react'
import './Menubar.css'

export const Menubar = ({ cardlist }) => {
    return (
        <div className="menu-bar">
            {
                cardlist.length == 0 ? <p>Cart is Empty</p> : <p>You have {cardlist.length} in the Cart</p>
            }
        </div>
    )
}
