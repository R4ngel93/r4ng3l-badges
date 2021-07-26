
import './styles/App.css';
import { Container, Image, Card, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <Container>

      <Card className="text-center" bg="dark" style={{ margin: '2.5em' }}>
        <Card.Header>Codewars</Card.Header>
        <Card.Body>
          <Image src="https://www.codewars.com/users/r4ng3l/badges/large" alt="Codewars"/>
        </Card.Body>
        <Card.Footer>
          <Navbar variant="dark" className="justify-content-center">
            <Nav>
              <Nav.Link href="https://www.codewars.com/users/r4ng3l" target="_blank">Visit profile</Nav.Link>
            </Nav>
          </Navbar>
        </Card.Footer>
      </Card>

      <Card className="text-center" bg="dark" style={{ margin: '2.5em' }}>
        <Card.Header>Hack The Box</Card.Header>
        <Card.Body>
          <Image src="http://www.hackthebox.eu/badge/image/501739" alt="Hack The Box"/>
        </Card.Body>
        <Card.Footer>
          <Navbar variant="dark" className="justify-content-center">
            <Nav>
              <Nav.Link href="https://app.hackthebox.eu/users/501739" target="_blank">Visit profile</Nav.Link>
            </Nav>
          </Navbar>
        </Card.Footer>
      </Card>

      <Card className="text-center" bg="dark" style={{ margin: '2.5em' }}>
        <Card.Header>TryHackMe</Card.Header>
        <Card.Body>
          <Image src="https://tryhackme-badges.s3.amazonaws.com/1v4r.png" alt="TryHackMe"/>
        </Card.Body>
        <Card.Footer>
          <Navbar variant="dark" className="justify-content-center">
            <Nav>
              <Nav.Link href="https://tryhackme.com/p/1v4r" target="_blank">Visit profile</Nav.Link>
            </Nav>
          </Navbar>
        </Card.Footer>
      </Card>

    </Container>
  );
}

export default App;
