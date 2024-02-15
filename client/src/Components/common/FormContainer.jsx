import React from 'react';
import Bg from '/bg.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/FormContainer.css'

function FormContainer({ children }) {
  return (
    <div className="min-h-screen " style={{ backgroundImage: `url(${Bg})`}}>  {/* Full screen blue background */}
      <Container fluid className="mx-auto ">  {/* Centered fluid container */}
        <Row className="justify-content-md-center">
        <Col xs={12} md={6} className="bg-white-900 text-white p-5 mt-5 border border-white rounded-lg adjust">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormContainer;
