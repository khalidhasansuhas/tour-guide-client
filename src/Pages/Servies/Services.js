import React, { useContext } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../layout/Main';

const Services = () => {
    const services = useContext(ServiceContext)

    return (
        <>
        <h2 className='text-center mt-5'> Services that I Provide</h2>
        <div className='w-full d-flex my-2'>
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
        </>
    );
};

export default Services;