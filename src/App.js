import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
//import Nav from "./components/Nav";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
