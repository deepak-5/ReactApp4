import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import homeImage from './homeImage.jpg';

function HomePages() {
  return (
    <div>
      <NavBar />
      <Container fluid className="p-3">
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Our Website!</h1>
            <p>We are a leading provider of mortgage automation solutions that help you streamline your workflow and reduce costs. Whether you are a lender, broker, or borrower, we have the right tools for you.</p>
            <Button variant="primary" href="/about">Learn More</Button>
          </Col>
          <Col md={6}>
            <img src={homeImage} alt="Home Image" width="100%" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Lenders</Card.Title>
                <Card.Text>
                  Our platform helps you automate the entire loan origination process, from application to closing. You can manage your pipeline, track documents, communicate with borrowers, and generate reports with ease.
                </Card.Text>
                <Button variant="secondary" href="/lenders">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Brokers</Card.Title>
                <Card.Text>
                  Our platform helps you connect with multiple lenders and find the best rates and terms for your clients. You can submit applications, compare offers, negotiate fees, and close deals faster.
                </Card.Text>
                <Button variant="secondary" href="/brokers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Borrowers</Card.Title>
                <Card.Text>
                  Our platform helps you find the best mortgage option for your needs. You can apply online, upload documents, check your status, and chat with your loan officer anytime, anywhere.
                </Card.Text>
                <Button variant="secondary" href="/borrowers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePages;
