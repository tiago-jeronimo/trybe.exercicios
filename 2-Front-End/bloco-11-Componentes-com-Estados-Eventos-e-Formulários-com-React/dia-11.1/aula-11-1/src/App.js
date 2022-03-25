import './App.css';
import React from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventPassord : "password",
      password : "",
    }
  }
 mudaClick = () =>{
  this.state.eventPassord === "password"
  ? this.setState({
    eventPassord:"text"
  })
  : this.setState({
     eventPassord:"password"
     })
 }
 returnPassword = (event) => {
   console.log(event.target.value);
   this.setState({
     password:event.target.value
    })
 }

  render(){
    return(
      <div>
        <label> Password </label>
          <input type={ this.state.eventPassord } 
          placeholder="Digite sua senha aqui!" 
          onChange={ this.returnPassword } />
          {this.state.eventPassord==="password" ? (
            <BsFillEyeFill
            onClick={ this.mudaClick }/>
            ) 
            : (
            <BsFillEyeSlashFill 
            onClick={ this.mudaClick }/>
          )}
      </div>
    );
  }
}
export default App;
