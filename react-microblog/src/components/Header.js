import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
  return (
    <Navbar bg="primary" sticky="top" className="Header">
      <Container>
        <Navbar.Brand>Microblog</Navbar.Brand>
      </Container>
    </Navbar>
  );
}