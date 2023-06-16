import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';


function App() {

  const { pathname } = useLocation();
  console.log(pathname)


  return (

    <div className="app">

        { pathname !== "/login" && <Header />}



        <Routes>
           <Route path = "/login" element = {<Login/> }/>

          {pathname !== "/login" && <>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />



          </>}
        </Routes>


    </div>
  )
}

export default App;
