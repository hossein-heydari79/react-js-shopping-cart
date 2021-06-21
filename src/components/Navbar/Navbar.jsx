import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="menu">
            <div>6 Products</div>
            <div>
                <span>Order </span>
                <select name="" id="">
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highes">Highest</option>
                </select>
            </div>
            <div>
                <span>Filter </span>
                <select name="" id="">
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}
