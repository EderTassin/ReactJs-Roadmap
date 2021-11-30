import './App.css';
import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giphy</h1>


        
        <Link to="/">Home</Link>
        <Link to="/gif/autos">Gifs de Autos</Link>
        <Link to="/gif/programming">Gifs de Programing</Link>


        <div>
          <Route
            component={ListOfGifs} path="/gif/:keyword"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
