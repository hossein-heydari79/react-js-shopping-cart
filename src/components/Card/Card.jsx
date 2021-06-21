import React from 'react'
import './Card.css'

export const Card = ({ id, url, description, price, cardlist, setCardlist }) => {

    function add() {
        let item = cardlist.find((i) => i.id === id)
        if (item) {
            let arr = [...cardlist];
            let index = arr.findIndex((i) => i.id === id);
            arr[index].count++;
            setCardlist(arr);
        }
        else {
            setCardlist([...cardlist, { id: id, url: url, description: description, price: price, count: 1 }])
        }
    }



    return (

        <div className="card">
            <img src={url} className="card-img" />
            <p>{description}</p>
            <div className="addToCard">
                <p>${price}</p>
                <button onClick={add}>Add To Card</button>
            </div>
        </div>
    )
}
