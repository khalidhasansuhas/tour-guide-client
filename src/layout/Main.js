import React, { createContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';

export const ServiceContext = createContext([])

const Main = () => {

    const services = useLoaderData()

    return (
        <div>
            <ServiceContext.Provider value={services}>

                <Header></Header>
                <Container>
                    <Row>
                        <Col lg='3' className='d-none d-lg-block'>
                            <LeftSideNav></LeftSideNav>
                        </Col>
                        <Col lg='9'>
                            <Outlet></Outlet>
                        </Col>

                    </Row>
                </Container>
                <Footer></Footer>
            </ServiceContext.Provider>
        </div>
    );
};

export default Main;