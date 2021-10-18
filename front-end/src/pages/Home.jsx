import React, { useContext, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product/Product';

import { AppContext } from '../context/AppContext'
import imputeSetStateApp from '../context/imputeSetStateApp';

const Home = () => {

    const [appState] = useContext(AppContext);

    const { shop } = appState;

    const { loading, products } = shop

    useEffect(() => {

        fetch('http://localhost:8000/api/products')
            .then(response => response.json())
            .then(data => {
                if(data.length > 0) {
                    imputeSetStateApp((draft) => {
                        draft.shop.products = data;
                        draft.shop.loading = false;
                    });
                }
            });


    }, [])


    return (
        <div>
            <h1 style={{fontSize:'x-large', fontWeight:'bold'}}>Products</h1>
            {loading ? (
                <h2>Loading for fetched products ...</h2>
            ) : (
                <Row>
                    {products.map((item) => {
                        return (
                            <Col key={item._id} sm={12} md={6} lg={4}>
                                <Product product={item} />
                            </Col>
                        )
                    })}
                </Row>
            )}
        </div>
    )
}

export default Home
