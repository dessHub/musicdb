import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardImg } from 'reactstrap';

function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs="12" lg="3">
          <Card className="mb-5">
            <CardImg alt="Card image cap" src="https://picsum.photos/256/186" top width="100%" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardTitle tag="h6">Card title</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card className="mb-5">
            <CardImg alt="Card image cap" src="https://picsum.photos/256/186" top width="100%" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardTitle tag="h6">Card title</CardTitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card className="mb-5">
            <CardImg alt="Card image cap" src="https://picsum.photos/256/186" top width="100%" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardTitle tag="h6">Card title</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
