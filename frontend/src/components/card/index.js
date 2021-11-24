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
                  Detect the human faces from the static image.
                  It can be used for many applications such as face alignment, landmark extraction.
                </Card.Text>
                <Link to="/facedetection">
                  <Button variant="success">Demo</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card2.jpg" />
              <Card.Body>
                <Card.Title>Face Liveness Detection</Card.Title>
                <Card.Text>
                  Detect whether face is live or fake in the images.
                  It consists of passive and active liveness detection. {' '}
                </Card.Text>
                <Link to="/faceliveness">
                  <Button variant="success">Demo</Button>
                </Link>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card3.jpg" />
              <Card.Body>
                <Card.Title>Face Recognition</Card.Title>
                <Card.Text>
                  Recognise the faces between two images.
                  It can be used for face recognition processes such as face feature embedding, recognition module.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card4.jpg" />
              <Card.Body>
                <Card.Title>Camera Surveillance System</Card.Title>
                <Card.Text>
                  This uses real-time face recognition system. It will include user management system, real-time
                  face recognition, statistical analysis in customers.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card5.jpg" />
              <Card.Body>
                <Card.Title>Face Attendance System</Card.Title>
                <Card.Text>
                  It consists of client and server side applications. For client side application, it's based
                  on mobile & tablet. For server side application, it has admin panel for employee management system.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card6.jpg" />
              <Card.Body>
                <Card.Title>Face Tracking</Card.Title>
                <Card.Text>
                  This is real-time face tracking system. It's extremely reliable, seamless to integrate into mobile
                  version SDK and simple to use.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card7.jpg" />
              <Card.Body>
                <Card.Title>Face Analytics SDK</Card.Title>
                <Card.Text>
                  This system consists of Age & Gender detection, facial landmark extraction, expression recognition and
                  deep fake detection.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card8.jpg" />
              <Card.Body>
                <Card.Title>Eye Tracking App</Card.Title>
                <Card.Text>
                  This is mobile app to make car drivers notify their eye blink state.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card9.jpg" />
              <Card.Body>
                <Card.Title>Background Remover</Card.Title>
                <Card.Text>
                  This tool automatically removes the background from any image. It uses computer vision techniques. {' '}
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card10.jpg" />
              <Card.Body>
                <Card.Title>Video Analytics System</Card.Title>
                <Card.Text>
                  It can detect many kind of objects from the video and get the statistical analysis in the region of interest.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
             <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card11.jpg" />
              <Card.Body>
                <Card.Title>Automatic Question Answer Generation</Card.Title>
                <Card.Text>
                  This tool automatically generates pairs of question and answer from raw text. {' '}
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="/static/assets/imgs/card12.jpg" />
              <Card.Body>
                <Card.Title>GPT-3 Text Generation</Card.Title>
                <Card.Text>
                  GPT-3 can create anything that has a language structure — which means it can answer questions,
                  write essays, summarize long texts, translate languages, take memos, and even create computer code.
                </Card.Text>
                <a href="#contact">
                  <Button variant="dark">Contact Me</Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 30 days ago</small>
              </Card.Footer>
            </Card>
          </Row>
        </CardGroup>
    )
}