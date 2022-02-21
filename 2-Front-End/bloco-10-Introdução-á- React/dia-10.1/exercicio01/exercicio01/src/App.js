import logo from './logo.svg';
import './App.css';

const array = [1,2,3,4];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function criaLista(){
 return <ul> {array.map((element) => Task(element))} </ul>
}

function App() {
  return ( <> { criaLista() } </>);
}

export default App;
