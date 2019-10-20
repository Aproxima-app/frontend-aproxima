import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import axios from 'axios';

import Logo from "../../assets/logobranca.svg";
import Aproxima from '../../assets/aproxima.svg';
import Back from '../../assets/back.svg';

import { Form, Container, Header } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    description: "",
    adress: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { title, description, adress } = this.state;
    if (!title || !description || !adress) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
        const { lon, lat } = await axios.get(`http://open.mapquestapi.com/nominatim/v1/search.php?key=jk2P6U7zqV4hTQ9iGxwIe4WerKg8p0Et&format=json&q=${adress}&addressdetails=1&limit=3&viewbox=-1.99%2C52.02%2C0.78%2C50.94&exclude_place_ids=41697`)
      try {
        await api.post("/events", { title, description, adress, latidude: lat, longitude: lon });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar seu evento. T.T" });
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
            type="title"
            placeholder="Titulo do evento"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <input
            type="description"
            placeholder="Descrição do evento"
            onChange={e => this.setState({ description: e.target.value })}
          />
          <input
            type="adress"
            placeholder="Endereço"
            onChange={e => this.setState({ adress: e.target.value })}
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