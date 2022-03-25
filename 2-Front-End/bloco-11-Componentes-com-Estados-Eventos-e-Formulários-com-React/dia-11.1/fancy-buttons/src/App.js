import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    console.log("Componente sendo construido");
  };
   click(){
    console.log('No meio do caminho')
  };
   click1(){
    console.log('Tinha uma pedra')
  } ;
  click2(){
    console.log('Nunca me esquecerei disso')
  };
  render () {
    return (
    <div >
     <button onClick={this.click}>CLIQUE AQUI!</button>
     <button onClick={this.click1}>CLIQUE AQUI!</button>
     <button onClick={this.click2}>CLIQUE AQUI!</button>
    </div>
  );
}
}
export default App;
