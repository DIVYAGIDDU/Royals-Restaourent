import React from 'react'
import Navbar from './components/Navbar'
import Header from './container1/Header'
import AboutUs from './container1/About'
import Menu from './container1/Menu'
import Contact from './contacts/Contact'
import Awards from './container1/Awards'
import Login from './container1/Login'
import Booktable from './container1/Booktable'
import Footer from './Footer/Footer'

import './App.css';
function App() {
  return (
    <div>
      <Navbar /><br/>
      <Header /> <hr/>
      <AboutUs /><hr/>
      <Menu/>
      <Awards/>
      <Contact/><hr/>
      <Login/> <hr/>
      <Booktable/>
       <Footer/>
    </div>
  );
}

export default App;
