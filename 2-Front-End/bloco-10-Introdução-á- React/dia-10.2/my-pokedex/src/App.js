import React from 'react';
import './App.css';
import Pokemon from './Components/Pokemon';
import CatalogPokemons from './CatalogPokemons';

class App extends React.Component {
  render(){
    
    return(
      <> 
        <section>
        <Pokemon name={CatalogPokemons[0].name} type={CatalogPokemons[0].type} />
        </section>  
      </>
    );
}
}

export default App;
