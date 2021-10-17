/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'


const Product = ({ match }) => {

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
            <Link to="/" className="btn btn-light my-3">
                Back to Home
            </Link>
            {loading ? (
                <h2>Fetching product details...</h2>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} fliud />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>{product.price}</ListGroup.Item>
                            <ListGroup.Item>{product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                >
                                    Add to basket
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default Product
