import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./topnav.css";
import { LOGO } from "utils/consts/assets";
import { pLOGO } from "utils/consts/assets";
const Topnav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      className="text-dark font-weight-bolder"
    >
      <Container>
        <Row>
          <Col className="d-flex">
            <div className="">
              <img
                src={LOGO}
                height="65"
                width="150"
                alt="logo"
                loading="lazy"
                style={{ marginTop: "1px", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" className="nav-create">
                  Create a course
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
export default Topnav;
