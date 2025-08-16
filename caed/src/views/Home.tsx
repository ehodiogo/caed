import {Container, Row, Col, Button, Card} from "react-bootstrap";
import NavbarComponent from "../components/Navbar.tsx";

const HomePage = () => {
  return (
    <>
        <NavbarComponent />
      <div className="bg-light py-5 text-center">
        <Container>
          <h1 className="display-4">Bem-vindo ao Sistema da Coordenadoria de Ações Educacionais </h1>
          <p className="lead">
            Uma aplicação moderna construída com React e React-Bootstrap.
          </p>
          <Button variant="primary" size="lg" href="formulario">
            Começar Agora
          </Button>
        </Container>
      </div>

      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Funcionalidade 1</Card.Title>
                <Card.Text>
                  Descrição breve da funcionalidade principal.
                </Card.Text>
                <Button variant="outline-primary">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Funcionalidade 2</Card.Title>
                <Card.Text>
                  Outra funcionalidade incrível do sistema.
                </Card.Text>
                <Button variant="outline-primary">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>Funcionalidade 3</Card.Title>
                <Card.Text>
                  Destaque o que faz sua aplicação ser única.
                </Card.Text>
                <Button variant="outline-primary">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-light py-3 text-center">
        <Container>
          <p className="mb-0">© 2025 UFSM/CPD. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </>
  );
};

export default HomePage;
