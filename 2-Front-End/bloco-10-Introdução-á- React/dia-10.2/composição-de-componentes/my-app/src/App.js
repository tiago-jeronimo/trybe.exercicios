// src/App.js
import React from 'react';
import Livro from './Components/Livro'
import livros  from './Components/data';
class App extends React.Component {
  render() {
    return (
      <article>
       <Livro name={livros[0].name} number={livros[0].number}/>
      </article>
    );
  }
}

export default App;