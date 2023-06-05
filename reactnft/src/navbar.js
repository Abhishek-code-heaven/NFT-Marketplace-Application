import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import "./Box.css"
import React, { useState, useEffect } from 'react'
import NFTdata from "./Data.json"


export function BigButton() {
    return (
      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">NFT Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
  export function SmallButton({}) {
    
    const [cardInfwo, setNFT] = useState([]);
    // const cardInfo = [
    //     {
           
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/1.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE GOAT",
    
    //     },
    //     {
         
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/2.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Vote",
      
    //     },
    //     {

    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/3.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Loat",
          
    //     },
    //     {
     
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/4.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Boat",
           
    //     },
    //     {
           
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/1.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE GOAT",
    
    //     },
    //     {
         
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/2.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Vote",
      
    //     },
    //     {

    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/3.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Loat",
          
    //     },
    //     {
     
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/4.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Boat",
           
    //     },
    //     {
           
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/1.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE GOAT",
    
    //     },
    //     {
         
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/2.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Vote",
      
    //     },
    //     {

    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/3.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Loat",
          
    //     },
    //     {
     
    //         image: "https://ipfs.io/ipfs/QmetESUb7wTPr8mBHWFsiSKMw6HTLWUGoL8DrkcaY9TTyh/4.png",
    //         title: "Net2Dev Web3 NFT Number",
    //         text: "THE Boat",
           
    //     },
    //   ];
      useEffect(() => {
        fetch('/nft').then(response => response.json().then(data => {
          
          const jsondata = JSON.stringify(data)
          
          setNFT(data);
        }))
      }, [])
    const renderCard = (card, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="box">
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      };
    
      return <div className="grid">{cardInfwo.map(renderCard)}</div>;
  }