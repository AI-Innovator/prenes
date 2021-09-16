import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

export default () => {
    return (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="/static/assets/imgs/download.jpeg" />
            <Card.Body>
              <Card.Title>Face Detection</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Button variant="success">Demo</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/static/assets/imgs/download.jpeg" />
            <Card.Body>
              <Card.Title>Face Liveness Detection</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
              <Button variant="success">Demo</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="/static/assets/imgs/download.jpeg" />
            <Card.Body>
              <Card.Title>Face Recognition</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
              <Button variant="success">Demo</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
    )
}