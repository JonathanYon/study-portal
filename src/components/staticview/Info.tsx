import { Container, Row, Col } from "react-bootstrap";
import { elearn, estudy } from "utils/consts/assets";
import "./info.css";

const Info = () => {
  return (
    <Container fluid>
      <Row className="d-flex">
        <Col
          style={{
            backgroundImage: `url(${estudy})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            height: "100vh"
          }}
        >
          hello
        </Col>
        <Col
          style={{
            backgroundImage: `url(${elearn})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            height: "100vh",
            backgroundSize: "100% 75%",
            marginLeft: "0.2rem"
          }}
        >
          hel
        </Col>
      </Row>
    </Container>
  );
};
export default Info;
