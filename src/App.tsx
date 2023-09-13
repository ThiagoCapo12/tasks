import React from "react";
import "./App.css";
import img_messi from "./lionel-messi-kiss-world-cup-trophy.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Messi is the GOAT by Thiago Vazquez CISC275
            </header>
            <h1> Lionel Messi is the Greatest Footballer of All Times</h1>
            <img src={img_messi} alt="picture of Messi kissing the World Cup" />
            <ul>
                <li> Messi has won 7 Ballon Dors </li>
                <li> Messi has won 4 Champions Leagues</li>
                <li> Messi has won 1 World Cup</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
