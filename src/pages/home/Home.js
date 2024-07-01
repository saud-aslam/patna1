import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Container, Row, Col } from "react-bootstrap";
import Kebab from "../../assets/kebab.webp";
import { Link } from 'react-router-dom';
import "../../styles/HomeStyle.css";

const Home = () => {
  return (
    <>
      <Layout>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg={5} className="mb-5 mb-lg-0">
                <div className="position-relative">
                  <img src={Kebab} className="img-fluid" alt="Hero" />
                  <div className="price_badge">
                    <div className="badge_text">
                      <h4 className="h4_xs">Only</h4>
                      <h4 className="h3_lg">$6.99</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="hero_text text-center">
                  <h1 className="text-white">Kabul Express</h1>
                  <h2 className="text-white">Halal</h2>
                  <h3 className="text-white pt-2 pb-4">
                    Basic eatery specializing in Middle Eastern and Indian Pakistani Style dishes, plus biryani & curry dishes
                  </h3>
                  <Link to="/menu" className="btn order_now">
                    Order Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </>
  )
}

export default Home