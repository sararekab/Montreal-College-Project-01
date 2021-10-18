import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap'
import { pagesStyle } from './pages.style';

const Account = () => {
    return (
        <Row >
        <Form style={pagesStyle.boxStyle}>
            <h1 style={{ display: 'block', textAlign: 'center', fontSize: 'x-large' }}>
                Account
            </h1>
            <hr />

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter your family" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    </Row >

    );

   }

export default Account;
