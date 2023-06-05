import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function LoanPage() {
  return (
    <div>
      <NavBar />
      <Container fluid className="p-3">
        <Row>
          <Col md={3}>
            <Card>
              <Card.Header>Loan Application</Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link to="/PersonalDetails" className="custom-card">
                      <span>Personal Details</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/PropertyDetails" className="custom-card">
                      <span>Property Details</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Identity" className="custom-card">
                      <span>Identity</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/CreditCard" className="custom-card">
                      <span>Credit Card</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Assets" className="custom-card">
                      <span>Assets</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Income" className="custom-card">
                      <span>Income</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Address" className="custom-card">
                      <span>Address</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Employee" className="custom-card">
                      <span>Employee</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Loan" className="custom-card">
                      <span>Loan</span>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/Investment" className="custom-card">
                      <span>Investment</span>
                    </Link>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoanPage;
