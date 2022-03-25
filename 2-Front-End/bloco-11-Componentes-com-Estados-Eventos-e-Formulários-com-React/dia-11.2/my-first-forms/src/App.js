import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      dataDeNascimento:""
    };
  }

  handleChange(event){
    this.setState({
      dataDeNascimento: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label> Qual sua fruta favorita?
            <select>
              <option>Limão</option>
              <option>Morango</option>
              <option>Manga</option>
              <option>Jabuticaba</option>
            </select>
         </label> 

         <label> Qual a data do seu nascimento?
         <input name="dataDeNascimento" type="date" value={this.state.dataDeNascimento}  onChange={this.handleChange}/>
         </label>
         <label> Qual a data do seu nome?
         <input type="text" />
         </label>
         <label> Qual sua opinião sobre a revolução francesa?
              <textarea ></textarea>
         </label>
        </form>
      </div>
    );
  }
}

export default App;