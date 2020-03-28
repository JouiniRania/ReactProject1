import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;

