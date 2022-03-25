import React from "react";

class Pokemon extends React.Component{
    render(){
        console.log(this)
        return(
            <article>
            <h1>Pokemon: {this.props.name}</h1>
            <p>Type: {this.props.type}</p> 
            <p>Peso: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit} </p>
            <img src={ this.props.image } alt={ this.props.name }/>
            </article >
        );
    }
}


export default Pokemon;