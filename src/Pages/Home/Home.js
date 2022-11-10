import React from 'react';
import { Button, Card, Carousel, Col, Image, ListGroup, Row } from 'react-bootstrap';
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
            <h4 className='text-center text- bg-warning py-3 mt-5'> Suhas from <span className='text-success'>Tour Guide</span> says, Hi. may your Tour Experience gets better with my service </h4>
            <Carousel className='my-3 ' style={{ height: '200' }}>
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
            <h4 className='text-center'>Freatues</h4>

            <div className="container overflow-hidden mb-5">
                <div className="row gy-5">
                    <div className="col-6">
                        <div className="p-3 border bg-light">Speak 5 Languages</div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">Friendly and Extrovert</div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">Quality Service</div>
                    </div>
                    <div className="col-6">
                        <div className="p-3 border bg-light">Good Navigator</div>
                    </div>
                </div>
            </div>
            <h4 className='text-center mb-3'>Some moments with happy clients</h4>
            <Row xs={1} md={2} className="g-4 mb-5">
                    <Col className="col-6">
                        <Card>
                            <Card.Img variant="top" src="https://static9.depositphotos.com/1000291/1170/i/450/depositphotos_11709956-stock-photo-tourist-travellers-with-map-in.jpg" />
                            <Card.Body>
                                <Card.Title>Location: Sreemangal</Card.Title>
                              
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-6">
                        <Card> 
                            <Card.Img variant="top" src="https://www.machupicchuterra.com/wp-content/uploads/guia-turismo-machu-picchu-i.jpg" />
                            <Card.Body>
                                <Card.Title>Location : Moynamoti</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-6">
                        <Card>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnQ5pPV7b8XCAvQtXg_Fl8UfAEjUCA_dh0g&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>Location : sylhet</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="col-6">
                        <Card>
                            <Card.Img variant="top" src="https://cdn-production.checkfront.com/wp-content/uploads/2022/05/qualities-of-an-effective-tour-guide.jpg" />
                            <Card.Body>
                                <Card.Title>Location : saint martin</Card.Title>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                
            </Row>
        </>

    );
};

export default Home;