import React from "react";

class Livro extends React.Component{
    render(){
        return(
            <section>
                <p>{this.props.name} </p>
                <p>Posição{this.props.number}</p>
            </section>
        )
    }
}
export default Livro;