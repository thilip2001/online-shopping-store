import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center  text-secondary py-3">&copy;2022 Proudly Developed by Thiliban Ravichandran</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
