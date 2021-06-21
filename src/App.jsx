import './App.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { Card } from './components/Card/Card'
import { Menubar } from './components/Menubar/Menubar'
import { Cardlist } from './components/Cardlist/Cardlist'
import { Pay } from './components/Pay/Pay'

function App() {
  return (
    <>

      <Header />

      <div className="main">
        <div className="left">

          <Navbar />
          <div className="card-section">
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="right">
          <Menubar />
          <Cardlist />
          <Pay />
        </div>
      </div>



      <Footer />

    </>
  );
}

export default App;
