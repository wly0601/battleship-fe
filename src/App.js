import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Screen from './components/Screen/Screen.js';
import Settings from './components/Settings/Settings.js'

function App() {
  return (
    <Container fluid>
      <Row className="m-2">
        <Col className="screen" md={9}>
          <Screen />
        </Col>
        <Col className="settings" md={3}>
          <Settings />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
