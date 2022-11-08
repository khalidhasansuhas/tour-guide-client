import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import Guide from '../../../assets/Guide.jpg';
import CoxBazar from '../../../assets/CoxBazar.jpg';
import Jaflong from '../../../assets/Jaflong.jpg';
import Moynamoti from '../../../assets/Moynamoti.jpg';
import SaintMartin from '../../../assets/SaintMartin.jpg';
import './LeftSideNav.css'


const LeftSideNav = () => {
    return (
        <>
            <Card className='my-5'>
                <Card.Img variant="top" src={Guide} />
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        I am Suhas, a frelance tour guide from Dhaka, Bangladesh. I have been providing tour guiding service for 5years with more than 500 happy clients from all around the world. I speak fluent <strong>English , Bengali, Hindi, French, Spanish</strong> languages so that tourist all around the world get to know about our beautiful Bangladesh regardless of the language barrier. I know how to navigate every tourist spot with minimum cost.
                    </Card.Text>
                    <div className='w-full d-flex justify-content-center'>
                        <Link to='/services'><Button variant="primary">Take My Service</Button></Link>
                    </div>
                </Card.Body>
            </Card>
            <Card className='mb-5'>
                <Card.Header className='text-center'>Features</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Quality Service</ListGroup.Item>
                    <ListGroup.Item>Professional frelance guide</ListGroup.Item>
                    <ListGroup.Item>Speak 5 languages</ListGroup.Item>
                    <ListGroup.Item>Low Cost</ListGroup.Item>
                    <ListGroup.Item>Friendly & Extrovert</ListGroup.Item>
                    <ListGroup.Item>Good Navigator</ListGroup.Item>
                </ListGroup>
            </Card>

                <h3 className='text-center'>Some Places</h3>
            <Carousel className='mb-5' style={{ height: '200' }}>
                <Carousel.Item interval={1000} style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={CoxBazar}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500} style={{ height: '200' }}>
                    <img
                    fluid
                        className="d-block w-100"
                        src={Jaflong}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <img
                    fluid
                        className="d-block w-100"
                        src={SaintMartin}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <img
                    fluid
                        className="d-block w-100"
                        src={Moynamoti}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default LeftSideNav;