import React, { useContext, useEffect } from 'react'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import { AppContext } from '../context/AppContext';
import imputeSetStateApp from '../context/imputeSetStateApp';


const Cart = ({ match }) => {

    const [appState] = useContext(AppContext);

    const { cart } = appState;

    const cartItems = cart

    return (
        <div>
            <Row>
                <Col md={8}>
                    <h2>Basket</h2>
                    {cartItems.length === 0 ? (
                        <p>Basket is empty</p>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item, index) => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>{item.name}</Col>
                                        <Col md={2}>{item.price}</Col>
                                        <Col md={2}>
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={() => {
                                                    imputeSetStateApp((draft) => {
                                                        draft.cart.splice(index, 1);
                                                    });
                                                }}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cart
