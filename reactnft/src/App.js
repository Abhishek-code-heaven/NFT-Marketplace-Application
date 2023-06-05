import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import SearchBar from './Components/SearchBar';
import { BigButton, SmallButton } from './navbar';
import BookData from "./Data.json"
import background from './/appbackground.jpg'
import React, { useState, useEffect } from 'react'

function App() {
  const [cardInfwo, setNFT] = useState([]);
  useEffect(() => {
    fetch('/nft').then(response => response.json().then(data => {
      
      const jsondata = JSON.stringify(data)
      
      setNFT(data);
    }))
  }, [])
  return (
    <div style={{backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',

    width: '100vw',
    height: '100vh'}}>
      <BigButton />
     
      <SearchBar placeholder="Enter a NFT type.." data={BookData} />
     
      
    </div>
    
  );
}


export default App;
