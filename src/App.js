import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./App.css";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/database";
import MostrarInput from "./components/mostrarInput.component";
var firebaseConfig = {
  apiKey: "AIzaSyDr-2kOz_dKDnG02RZX-_GwOgSzyv8jVHk",
  authDomain: "tablas-posiciones.firebaseapp.com",
  databaseURL: "https://tablas-posiciones.firebaseio.com",
  projectId: "tablas-posiciones",
  storageBucket: "tablas-posiciones.appspot.com",
  messagingSenderId: "378257734787",
  appId: "1:378257734787:web:27a9ef41e5f0d10cb96fb6",
  measurementId: "G-B033JV69H0",
};
firebase.initializeApp(firebaseConfig);
var torneosRef = firebase.database().ref("/pokemon");
class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      newPlayer: {},
      torneos: ["torneo 1", "torneo 2", "torneo 3", "torneo 4", "torneo 5"],
    };
  }

  componentDidMount = async () => {
    var torneosData = await torneosRef
      .once("value")
      .then((snapshot) => snapshot.val());
    if (torneosData) {
      torneosData = Object.values(torneosData);
      var dataFromFirebase = [];
      torneosData.forEach((playerFF) => {
        dataFromFirebase.push(playerFF);
      });
      this.setState({ players: dataFromFirebase });
    }
  };

  handleChangeNombre = (event) => {
    var beforeState = Object.assign({}, this.state.newPlayer);
    beforeState.name = event.target.value;
    this.setState({
      newPlayer: beforeState,
    });
  };
  handleChangeCodigo = (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
    var beforeState = Object.assign({}, this.state.newPlayer);
    beforeState.onlineCode = event.target.value;
    this.setState({
      newPlayer: beforeState,
    });
  };

  handleChangeTorneo = (event) => {
    var beforeState = Object.assign({}, this.state.newPlayer);
    beforeState.puntajeTorneos = [0, 0, 0, 0, 0];
    beforeState.puntajeTorneos[event.target.value - 1] = event.target.id;
    beforeState.puntajeTotal = 0;
    beforeState.puntajeTorneos.map((element) => {
      return (beforeState.puntajeTotal += Number(element));
    });
    beforeState.key = 4;
    this.setState({
      newPlayer: beforeState,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    var existOrNot = false;
    var allData = this.state.players;

    allData.forEach((player) => {
      if (player.onlineCode === this.state.newPlayer.onlineCode) {
        existOrNot = true;
        const index = this.state.newPlayer.puntajeTorneos.findIndex(
          (element) => element > 0
        );
        player.puntajeTorneos[index] = Number(
          this.state.newPlayer.puntajeTorneos[index]
        );
        player.puntajeTotal = 0;
        player.puntajeTorneos.map((element) => {
          return (player.puntajeTotal += Number(element));
        });
      }
    });
    if (!existOrNot) {
      allData.push(this.state.newPlayer);
    }
    await this.setState({ players: allData });
    this.state.players.forEach((playerToUpdate) => {
      torneosRef.child(playerToUpdate.onlineCode).set({
        name: playerToUpdate.name,
        onlineCode: playerToUpdate.onlineCode,
        puntajeTorneos: playerToUpdate.puntajeTorneos,
        puntajeTotal: playerToUpdate.puntajeTotal,
      });
    });
  };
  render() {
    const { players } = this.state;
    return (
      // mostar input

      // tabla inical

      <div className="tabla-posiciones">
        <MostrarInput
          handleChangeNombre={this.handleChangeNombre}
          handleChangeCodigo={this.handleChangeCodigo}
          handleChangeTorneo={this.handleChangeTorneo}
          handleSubmit={this.handleSubmit}
        ></MostrarInput>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              {this.state.torneos.map((torneo) => (
                <th key={torneo}>{torneo}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.onlineCode}>
                <td>{player.name}</td>
                {player.puntajeTorneos.map((puntaje, index) => (
                  <td key={index}>{puntaje}</td>
                ))}

                <td>{player.puntajeTotal}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
