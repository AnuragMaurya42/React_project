import React from 'react';
import './App.css';
import Card from './card';
import Container from './container'; // Import Container component
// import cardsData from './item'; // Import cards data
// import Button from './botton';
import'bootstrap/dist/css/bootstrap.min.css'
// import Container1 from './container1';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
    
        <div className="card-list">
           <Container>
            <Card></Card>
           </Container>        
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
