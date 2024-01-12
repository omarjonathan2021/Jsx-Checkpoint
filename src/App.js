import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Images from './Components/Images';

function App() {
  let firstName = 'Jonathan';
  firstName = true ? <Images/> && firstName : firstName = 'there';


  return (
    <div className="app">
      <Card className='border border-primary m-5 p-3' style={{ width: '18rem' }}>
      <Images/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Card.Text>
          <Price/>
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>

    <h1 className='m-5'>Hello {firstName}</h1>
    </div>
  );
}

export default App;