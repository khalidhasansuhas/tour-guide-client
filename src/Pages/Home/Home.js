import React from 'react';
import { Button, Card, Carousel, Image, ListGroup } from 'react-bootstrap';
import Slider2 from '../../assets/slider/Slider2.jpg';
import Slider3 from '../../assets/slider/Slider3.jpg';
import Slider4 from '../../assets/slider/Slider4.jpg';
import Slider5 from '../../assets/slider/Slider5.jpg';
import Slider1 from '../../assets/slider/Slider1.png';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    // const { loading } = useContext(AuthContext)

    useTitle('Home')
    const services = useLoaderData()

    
    return (
        <>
            <Carousel className='my-5 ' style={{ height: '200' }}>
                <Carousel.Item interval={1000} style={{ height: '200' }}>
                    <Image
                        fluid
                        className="d-block w-100"
                        src={Slider1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500} style={{ height: '200' }}>
                    <Image
                        fluid
                        className="d-block w-100"
                        src={Slider2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <Image
                        fluid
                        className="d-block w-100"
                        src={Slider3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <Image
                        fluid
                        className="d-block w-100"
                        src={Slider4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ height: '200' }}>
                    <Image
                        fluid
                        className="d-block w-100"
                        src={Slider5}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='w-full d-flex'>
                <div className='d-flex flex-wrap w-full mx-auto'>
                    {
                        services.map(service => {
                            return (<Card className='me-3 mb-3 ' style={{ width: '16rem' }}>
                                <Card.Img variant="top" src={service.image} />
                                <Card.Body>
                                    <Card.Title>Package: {service.serviceName}</Card.Title>
                                    <Card.Text>
                                        <strong>Description:</strong> {service.description.slice(0, 100) + "..."}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>Spot:</strong> {service.spot}</ListGroup.Item>
                                    <ListGroup.Item><strong>Days of Service:</strong> {service.days}</ListGroup.Item>
                                    <ListGroup.Item><strong>Service Cost:</strong> ${service.payment}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>

                                    <div className='w-full d-flex justify-content-center'>
                                        <Link to={`/services/${service._id}`}><Button variant="primary">View Details</Button></Link>
                                    </div>
                                </Card.Body>
                            </Card>)
                        })
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center w-full my-5'>
                <Link to='/services'><Button> See all Services</Button></Link>

            </div>
        </>

    );
};

export default Home;