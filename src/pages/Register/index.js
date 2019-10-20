import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";

import Logo from "../../assets/logobranca.svg";
import Aproxima from '../../assets/aproxima.svg';
import Back from '../../assets/back.svg';

import { Form, Container, Header } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { name, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
            <Header>
                <img src={Back} alt="Volta" />
                <img src={Logo} alt="Aproxima logo" />
            </Header>
          <img src={Aproxima} alt="Aproxima texto" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/login">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);