import './App.css';
import React, { Component } from 'react';

function click(){
  console.log('clik')
}
function click1(){
  console.log('clik1')
}function click2(){
  console.log('clik2')
}
class App extends Component {
  render (){
  return (
    <div >
     <button onClick={click}  >CLIQUE AQUI!</button>
     <button onClick={click1}>CLIQUE AQUI!</button>
     <button onClick={click2}>CLIQUE AQUI!</button>
    </div>
  );
}
}
export default App;
