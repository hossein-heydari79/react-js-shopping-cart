import './App.css';

function App() {
  return (
    <>

      <div className="header">
        <p>React Shopping Cart</p>
      </div>

      <div className="main">
        <div className="left">
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
          <div className="card-section">


            <div className="card">
              <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" className="card-img" />
              <p>Midi sundress with shirring detail</p>
              <div className="addToCard">
                <p>$29.9</p>
                <button>Add To Card</button>
              </div>
            </div>

            <div className="card">
              <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" className="card-img" />
              <p>Midi sundress with shirring detail</p>
              <div className="addToCard">
                <p>$29.9</p>
                <button>Add To Card</button>
              </div>
            </div>


            <div className="card">
              <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" className="card-img" />
              <p>Midi sundress with shirring detail</p>
              <div className="addToCard">
                <p>$29.9</p>
                <button>Add To Card</button>
              </div>
            </div>


            <div className="card">
              <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" className="card-img" />
              <p>Midi sundress with shirring detail</p>
              <div className="addToCard">
                <p>$29.9</p>
                <button>Add To Card</button>
              </div>
            </div>


          </div>
        </div>

        <div className="right">
          <div className="menu-bar">
            Cart is Empty
          </div>
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
            <div className="pay">
              <p>Total: $18.9</p>
              <button>Proceed</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
