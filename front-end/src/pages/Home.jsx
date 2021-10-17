import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'

import { AppContext } from '../context/AppContext'

const Home = () => {

    const [appState] = useContext(AppContext);

    const {shop} = appState;

    const { loading, products } = shop


    return (
        <div>
            <h1>Products</h1>
            {!loading ? (
                <h2>Loading for fetched products ...</h2>
            ) : (
                <Row>
                    {products.map((item) => {
                        return (
                            <Col key={item._id} sm={12} md={6} lg={4}>
                            </Col>
                        )
                    })}
                </Row>
            )}
        </div>
    )
}

export default Home
