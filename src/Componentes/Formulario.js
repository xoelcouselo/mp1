import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ok: true,
      display: "",
    };
  }

  render() {
    let mensaje;
    if (this.state.ok === true) {
      mensaje = "Todo OK";
    } else {
      mensaje = "Todo mal";
    }

    return (
      <div>
        <h1>El formulario {this.props.dato}</h1>
        <form>
          <label>Usuario</label>
          <input type="text" />
          <label>Contraseña</label>
          <input type="password" />

          <button type="submit">Enviar</button>
        </form>
        <p>{mensaje}</p>
      </div>
    );
  }
}

export default Formulario;
