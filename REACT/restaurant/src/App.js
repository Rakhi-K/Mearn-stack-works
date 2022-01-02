
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails'
import Rating from './components/Rating';


function App() {
  return (

    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* <Home/> */}

          {/* for routing purpose */}
          <Routes>
            <Route path='/' element={<Home />}></Route>
        
         {/* for another page- resdetails- <route path='/resdetails/1' eleemt={<resdetails/>} */}
            <Route path='/restaurant/:id' element={<RestaurantDetails />}></Route>
            {/* dynamic cintent so/:id -- colon":" given */}

            <Route path='/restaurant/:reviews' element={<Rating/>}></Route>
          
          
          </Routes>
        </Container>
      </main>
    </Router>

  );
}

export default App;
