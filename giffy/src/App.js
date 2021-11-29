import './App.css';
import React, { useState } from 'react';
import ListOfGifs from './components/ListOfGifs';

function App() {

  const [keyword, setKeyboard] = useState([]);

  function setGifsKeyword() {
   keyword = document.getElementById("keywordGif").value;
  }

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>

        <input type="text" name="keywordGif" id="keywordGif" value='rick'/>
        <button onClick={setGifsKeyword()}>Search</button>

        <div>
          <ListOfGifs keyword={keyword ? keyword :'rick'} />
        </div>
        <button></button>
      </section>
    </div>
  );
}

export default App;
