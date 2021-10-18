import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { pagesStyle } from './pages.style';

const ContactUs = () => {
    return (
        <Row >
            <Form style={pagesStyle.boxStyle}>
                <h1 style={{ display: 'block', textAlign: 'center', fontSize: 'x-large' }}>
                    Contact Us
                </h1>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Family</Form.Label>
                    <Form.Control type="email" placeholder="Enter your family" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your Message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </Row >

    );

}

export default ContactUs;
