import './App.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { Menubar } from './components/Menubar/Menubar'
import { Cardlist } from './components/Cardlist/Cardlist'
import { Pay } from './components/Pay/Pay'
import { Form } from './components/Form/Form'
import data from './data/data.js'
import { useState, useEffect } from 'react'


function App() {



  const [json, setJson] = useState(data.sort((a, b) => a.price - b.price));

  const [filter, setFilter] = useState({
    price: "lowest",
    size: "ALL"
  })

  const [cardlist, setCardlist] = useState([])

  const [mode, setMode] = useState({
    show: false
  })


  useEffect(() => {

    let arr = [];

    label: for (let i = 0; i < data.length; i++) {
      for (let h = 0; h < data[i].size.length; h++) {
        if (data[i].size[h] === filter.size) {
          arr.push(data[i]);
          continue label;
        }
      }
    }


    if (filter.price === "lowest") {
      setJson(arr.sort((a, b) => a.price - b.price));
    }
    else {
      setJson(arr.sort((a, b) => b.price - a.price));
    }

  }, [filter])



  return (
    <>

      <Header />

      <div className="main">
        <div className="left">

          <Navbar filter={filter} setfilter={setFilter} len={json.length} />
          <div className="card-section">
            {
              json.map((item, index) => (
                <Card key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} cardlist={cardlist} setCardlist={setCardlist} />
              ))
            }
          </div>
        </div>

        <div className="right">
          <Menubar cardlist={cardlist} />
          {
            cardlist.map((item) => (
              <Cardlist key={item.id} id={item.id} url={item.url} description={item.description} price={item.price} count={item.count} cardlist={cardlist} setCardlist={setCardlist} />
            ))
          }
          {
            cardlist.length != 0 && < Pay cardlist={cardlist} mode={mode} setmode={setMode} />
          }

          {
            cardlist.length != 0 && mode.show && <Form />
          }


        </div>
      </div>



      <Footer />

    </>
  );
}

export default App;
