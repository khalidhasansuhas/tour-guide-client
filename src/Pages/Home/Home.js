import React from 'react';
import { Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import Slider2 from '../../assets/slider/Slider2.jpg';
import Slider3 from '../../assets/slider/Slider3.jpg';
import Slider4 from '../../assets/slider/Slider4.jpg';
import Slider5 from '../../assets/slider/Slider5.jpg';
import Slider1 from '../../assets/slider/Slider1.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Carousel className='my-5 ' style={{ height: '200' }}>
                <Carousel.Item interval={1000} style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500} style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={Slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={Slider4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <img
                        fluid
                        className="d-block w-100"
                        src={Slider5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='w-full d-flex'>
                <div className='d-flex flex-wrap w-full mx-auto'>

                    <Card className='me-3 ' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className='me-3 ' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='d-flex justify-content-center w-full my-5'>
                <Link to='/services'><Button> See all Services</Button></Link>

            </div>
        </>

    );
};

export default Home;