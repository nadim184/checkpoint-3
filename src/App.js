import React from 'react';
import photo from './logo.svg';
import './App.css';
import algorythme from './azerty.png'
import Component from './component';
import Container from './container'; 

function App() {
  return (
   <div className="App">
    
      
      <header className="App-header">
         <div className="init">
         <Container/>
    <Container/>
    <Container/>
    <Container/>
     </div>
<div className="st" >
	<h1 className="title red"> WELCOME </h1>

	
  

<img src={algorythme} />



	<img src={photo} />
  </div>

</header>


</div>
      
      
    

  );
}

export default App;
