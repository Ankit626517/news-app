
import {BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
import Navbar from './projects/Navbar';
import Home from './projects/routing/Home';
import About from './projects/routing/About';
import Contect from './projects/routing/Contect';
import './App.css';



function App() {
  return (
   
    <div>
      
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About'element ={<About/>}/>
        <Route path='/Contect'element ={<Contect/>}/>

      </Routes>
      </Router>
      

        </div>
  );
}

export default App;
