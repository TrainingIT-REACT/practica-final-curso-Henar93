import React from "react";
import ReactDOM from "react-dom";

// Componentes
import UncontrolledForm from "./UncontrolledForm";




class PerfilUser extends React.Component {
  constructor(props) {
    super(props);

    // Bind del método
    this.onChange = this.onChange.bind(this);

    // Inicializamos el estado
    this.state = {
      value: "Angel"
    };
  }

  // Este método recibe cómo parámetro el evento sintético de React.
  // Podemos acceder al valor utilizando e.target.value
  onChange(e) {
    // e.persist();
    // this.setState(state => ({
    //   value: e.target.value
    // }));
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App container">

        <div className="row">
          <div className="six columns">
            <form>
              <label htmlFor="#input">Nombre</label>
              <input id="input" type="text" value={this.state.value} onChange={this.onChange} />
              <p>
                Nombre: <b>{this.state.value}</b>
              </p>
            </form>
          </div>
          <div className="six columns">
            <UncontrolledForm />
          </div>
        </div>

      </div>
    );
  }
}

export default PerfilUser;  