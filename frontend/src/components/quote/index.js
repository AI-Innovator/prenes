import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./index.css"

export default () => {
    return (
        <Form id="quote">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Your name*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Your e-mail*" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control as="textarea" placeholder="Tell us about your project" />
          </Form.Group>

          <Button variant="success" type="submit">
            Send Us
          </Button>
        </Form>
    )
}