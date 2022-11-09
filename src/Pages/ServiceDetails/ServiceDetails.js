import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Slider1 from '../../assets/slider/Slider1.png';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
  
    const { image, serviceName, payment, spot, description, days, _id } = useLoaderData();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = user?.displayName ;
        const email = user?.email;
        const photo = user?.photoURL;
        const comment = form.comment.value;

        const comments = {
            serviceId : _id,
            serviceName : serviceName,
            name: name,
            photo: photo,
            email: email,
            comment : comment
        }

        fetch('http://localhost:5000/comments',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(comments)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                alert('order placed');
                form.reset();
            }
        })
        .catch(e=>console.error(e))
    }

    return (
        <div>
            <div className="card my-5">
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Package: {serviceName}</h5>
                    <p className="card-text"><strong>Duration:</strong> {days} days</p>
                    <p className="card-text"><strong>Service area :</strong> {spot}</p>
                    <p className="card-text"><strong>Transport: </strong> Any</p>
                    <p className="card-text"> <strong>Rate:</strong> ${payment}</p>
                    <p className="card-text"><strong>Description:</strong> {description}</p>
                   
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
                <div className='p-3 mt-5 border border-secondary'>
                    {
                        user?.uid ?
                            <>
                                <h4 className='text-center'>Add a review</h4>
                                <form onSubmit={handleSubmit} className="form-floating ">

                                    <textarea name="comment" className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
                                    <label htmlFor="floatingTextarea">Write your Comments</label>
                                    {/* <input className='w-100 mt-2 p-2 me-2' type="email" name="email" id="" defaultValue={user?.email} readOnly disabled />
                                    <input className='w-100 mt-2 p-2' type="text" name="text" id="" defaultValue={user?.displayName} readOnly disabled /> <br /> */}
                                    <div className='d-flex justify-content-center my-2'>
                                        <Button type="submit" className="btn  btn-primary btn-block mb-4">Submit</Button>
                                    </div>
                                </form>
                            </>
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