import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Slider1 from '../../assets/slider/Slider1.png';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div className="card my-5">
                <img src={Slider1} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Spot: Moynamoti</h5>
                    <p className="card-text">Package: 24 hours</p>
                    <p className="card-text">Pickup: Dhaka</p>
                    <p className="card-text">Transport: any</p>
                    <p className="card-text">Hourly Rate $ :  5</p>
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <h2 className='text-center'>Reviews</h2>


            <div className='p-3 border border-secondary mb-5'>
                <Card className='mb-2'>
                    <Card.Header className='d-flex align-items-center h-100 '>

                        <Image style={{ height: '50px', width: "50px" }} roundedCircle src={Slider1} ></Image>
                        <h4 className='ps-3'>fedrik john</h4>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-2'>
                    <Card.Header className='d-flex align-items-center h-100 '>

                        <Image style={{ height: '50px', width: "50px" }} roundedCircle src={Slider1} ></Image>
                        <h4 className='ps-3'>fedrik john</h4>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className='py-3'>
                    {
                        user?.uid ?
                            <form class="form-floating ">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Comments</label>
                                <div className='d-flex justify-content-center my-2'>
                                    <Button type="submit" className="btn  btn-primary btn-block mb-4">Submit</Button>
                                </div>
                            </form>
                            :
                            <>
                                <h4 className='text-center py-3'>Please <Link to='/login'>login</Link> to add review</h4>
                            </>
                    }
                </div>


            </div>
        </div>
    );
};

export default ServiceDetails;