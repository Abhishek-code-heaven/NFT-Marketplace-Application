import React, { useState, useEffect, useReducer } from 'react'
import "./SearchBar.css"
import Card from 'react-bootstrap/Card';
import "../Box.css"
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import { BigButton, SmallButton } from '../navbar';
import img from '../images/screenshot_art_id3.png'

function SearchBar({placeholder,data}) {
  
  

  //data filter
  
  const [ignored, forceUpdate] = useReducer(x => x+1, 0);

  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {

    

    const searchWord = event.target.value
    const nftda = {"searchword":searchWord}
    const newFilter = data.filter((value) => {
    
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    
    if (searchWord===""){
      setColorr("yellow");
      setTextColor('black');
      setFilteredData([]);
    } else{
      const response = fetch('/nft', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        
        body: JSON.stringify(nftda)

      })
      console.log(response.data)
      forceUpdate()
      setColorr("green");
      setTextColor('white');
      setFilteredData(newFilter);
    }
    
  };
 

  // const [cardInfwo, setNFT] = useState([]);
  // useEffect(() => {
    
  //   fetch('/nft').then(response => response.json().then(data => {
      
  //     const jsondata = JSON.stringify(data)
      
  //     setNFT(data);
  //   }))
  // }, [ignored])

  const [cardInfwo, setNFT] = useState([]);
  useEffect(() => {
    const fetchdata = async () =>{
    await fetch('/nft').then(response => response.json().then(data => {
      
      const jsondata = JSON.stringify(data)
      console.log(data)
      setNFT(data);
    }))}
    fetchdata();
  }, [ignored])

  const renderCard = (card, index) => {
   
     
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src={require(`C:/Users/Abhishek Vaid/Desktop/desktop data/nftreact/reactapp/reactnft/public/img/${card.image}`)} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
    
  };



//color filter
  const [color, setColor] = useState("black")
  const clock = color => {
    setColor(color)
  }
  useEffect(()=>{
    document.body.style.backgroundColor = color
  },[color])
  const [colorr,setColorr]=useState('red');
  const [textColor,setTextColor]=useState('white');
  const click = color => {
    if (color ==="red"){
    setColorr("blue");
    setTextColor('white');
    }else{
      
      setColorr(color);
      setTextColor('red');
    }
  }
  const clickk = color => {
    <SmallButton/>
  }

  return (
    <div>
    <div className='search' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
      
        <div className="searchInputs">
            <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            <button style={{background:colorr,color:textColor}} className='barIcon' onClick={()=>{click("blue")}}>
              <BarChartIcon/>
            </button>
            <button onclick = {
              () => {clock("yellow")}
            } className='searchIcon'>
              <SearchIcon/>
            </button>
        </div>
        
        {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.map((value,key) => {
            return (
              
              <a className='dataItem' href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
          
        </div>
        )}
       
    </div>
    <div className="grid">{cardInfwo.map(renderCard)}</div>;
    
    </div>
    
  )
}

export default SearchBar