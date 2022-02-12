import { Container, Row, Col } from "react-bootstrap";
import { elearn, shapPic, typingPic, shapePic } from "utils/consts/assets";
import "./info.css";

const Info = () => {
  return (
    <Container fluid>
      <Row className="d-flex position-relative">
        <div
          style={{
            transform: "skew(0deg, 0deg)",
            width: "115%",
            position: "absolute",
            overflow: "hidden",
            top: "0%",
            left: "-21%",
            height: "96%",
            borderBottomRightRadius: "43rem",
            zIndex: "2",
            backgroundColor: "#f4f5f7",
            transformStyle: "preserve-3d",
          }}
        >
          <Col
            style={{
              backgroundImage: `url(${typingPic})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              height: "89vh",
              width: "112vw",
              top: "0%",
              left: "5%",
            }}
          >
            hello
          </Col>
        </div>
        <div
          style={{
            transform: "skew(0deg, 0deg)",
            width: "100%",

            overflow: "hidden",
            top: "0%",
            right: "-21%",
            height: "110%",
            borderBottomLeftRadius: "40rem",

            transformStyle: "preserve-3d",
          }}
        >
          <Col
            style={{
              backgroundImage: `url(${elearn})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              height: "90vh",
              marginLeft: "40rem",
              backgroundSize: "100% 100%",

              zIndex: "3",
            }}
          >
            held
          </Col>
        </div>
      </Row>
    </Container>
  );
};
export default Info;
