import { Container, Row, Col } from "react-bootstrap";
import { Heart, Bag, Search } from "react-bootstrap-icons";

export default function TopMenu() {
  return (
    <div className="nike-nav">

      <Container fluid>

        <Row className="align-items-center">

          <Col md={2}>
            <img src="/nike-logo.png" className="nike-logo"/>
          </Col>

          <Col md={6} className="menu-links">

            <span>Men</span>
            <span>Women</span>
            <span>Kids</span>
            <span>Jordan</span>
            <span>NikeSKIMS</span>
            <span>Sport</span>

          </Col>

          <Col md={4} className="right-icons">

            <div className="search-box">
              <Search /> Search
            </div>

            <Heart size={22}/>
            <Bag size={22}/>

          </Col>

        </Row>

      </Container>

    </div>
  );
}