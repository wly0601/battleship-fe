import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Screen, Opponent, Settings } from './components'

function App() {
  return (
    <Container fluid>
      <Row className="m-2">
        <Col className="screen" md={9}>
          <Screen />
        </Col>
        <Col className="settings" md={3}>
          <Row className="m-2">
            <Settings />
          </Row>
          <Row className="m-2">
            <Opponent />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
