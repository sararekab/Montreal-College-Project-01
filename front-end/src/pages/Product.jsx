/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import imputeSetStateApp from '../context/imputeSetStateApp';


const Product = ({ history, match }) => {


    const Id = match.params.id;

    const [productState, productSetState] = useState({
        loading: true,
        product: {}
    })

    useEffect(() => {

        fetch(`http://localhost:8000/api/products/${Id}`)
            .then(response => response.json())
            .then(data => {
                productSetState({
                    loading: false,
                    product: data
                })
            });


    }, [])

    const { loading, product } = productState;


    return (
        <div>

            {loading ? (
                <h2>Fetching product details...</h2>
            ) : (
                <>
                    <Row>
                        <Image src={product.image} style={{
                            margin: 'auto',
                            maxWidth: '400px',
                            border: 'solid 1px gray',
                            borderRadius: '20px',
                            boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                            marginBottom: '20px'
                        }} />
                    </Row>
                    <Row>

                        <Col >
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>${product.price}</ListGroup.Item>
                                <ListGroup.Item>{product.description}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Button
                                        className="btn-block"
                                        type="button"
                                        onClick={() => {
                                            imputeSetStateApp((draft) => {
                                                draft.cart.push(product);
                                            });
                                            history.push('/cart')
                                        }}
                                    >
                                        Add to basket
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Card style={{ width: '95%', marginTop: '35px' }}>
                            <Card.Body>
                                <Card.Title>Description</Card.Title>
                                <Card.Text>
                                    {product.description2}
                                </Card.Text>
                                <Card.Text>
                                    {product.description3}
                                </Card.Text>

                                <Link to="/" color="primary" className="btn  btn-primary my-3">
                                    Back to Home
                                </Link>
                            </Card.Body>
                        </Card>
                    </Row>
                </>
            )}
        </div>
    )
}

export default Product
