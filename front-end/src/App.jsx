import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Account from './pages/Account'


const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/"
                        component={Home}
                        exact
                    />
                    <Route
                        path="/product/:id"
                        component={Product}
                    />
                    <Route
                        path="/cart/:id?"
                        component={Cart}
                    />

                    <Route
                        path="/contact-us"
                        component={ContactUs}
                    />

                    <Route
                        path="/about-us"
                        component={AboutUs}
                    />

                    <Route
                        path="/account"
                        component={Account}
                    />
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default App