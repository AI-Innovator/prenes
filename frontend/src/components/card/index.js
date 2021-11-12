import React from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom"
import "./index.css"

export default () => {
    return (
        <CardGroup id="product">
          <Row xs={1} md={4} className="g-4">
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card1.jpg" />
              <Card.Body>
                <Card.Title>Face Detection</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to="/contact">
                  <Button variant="success">Demo</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card2.jpg" />
              <Card.Body>
                <Card.Title>Face Liveness Detection</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Link to="/faceliveness">
                  <Button variant="success">Demo</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card3.jpg" />
              <Card.Body>
                <Card.Title>Face Recognition</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card4.jpg" />
              <Card.Body>
                <Card.Title>Camera Surveillance System</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card5.jpg" />
              <Card.Body>
                <Card.Title>Face Attendance System</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card6.jpg" />
              <Card.Body>
                <Card.Title>Face Tracking</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to="/contact">
                  <Button variant="warning" disabled>Coming Soon</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card7.jpg" />
              <Card.Body>
                <Card.Title>Face Analytics SDK</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card8.jpg" />
              <Card.Body>
                <Card.Title>Eye Tracking App</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card9.jpg" />
              <Card.Body>
                <Card.Title>Background Remover</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Link to="/faceliveness">
                  <Button variant="warning" disabled>Coming Soon</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card10.jpg" />
              <Card.Body>
                <Card.Title>Video Analytics System</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <Button variant="warning" disabled>Coming Soon</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
             <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card11.jpg" />
              <Card.Body>
                <Card.Title>Automatic Question Answer Generation</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
                <Link to="/faceliveness">
                  <Button variant="warning" disabled>Coming Soon</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card12.jpg" />
              <Card.Body>
                <Card.Title>GPT-3 Text Generation</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Link to="/contact">
                  <Button variant="warning" disabled>Coming Soon</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Row>
        </CardGroup>
    )
}