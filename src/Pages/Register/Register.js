import React, { useState } from 'react';
import { useContext } from 'react';
import { Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from 'firebase/auth';
import Registerimg from '../../assets/Registerimg.png';
import Tg from '../../assets/Tg.jpg';

const Register = () => {


    const [error, setError] = useState('')
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUpdateUserProfile(name, photoURL);
                navigate('/')
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    return (
        <>

            <Row className=' ms-4 px-5 py-5 shadow p-3 my-5 mb-5 bg-body rounded' >
                <Col lg='6'>
                    <div >
                        <div class="text-center mb-3">
                            <Image style={{height:'60px'}} src={Tg}></Image>
                           
                        </div>
                        <p class="text-center">or:</p>

                        <Form onSubmit={handleSubmit}>


                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='name' type="text" id="registerName" placeholder='Full Name' />
                                <Form.Label class="form-label" for="registerName"> Your Name</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='photoURL' type="text" id="registerName" placeholder='Photo URL' />
                                <Form.Label class="form-label" for="registerName"> Your PhotoURL</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='email' type="email" id="registerName" required placeholder='Your Email' />
                                <Form.Label class="form-label" for="registerName"> Your Email</Form.Label>
                            </Form.Group>
                            <Form.Group class="form-outline mb-4">
                                <Form.Control name='password' type="password" id="registerName" required placeholder='Your Password' />
                                <Form.Label class="form-label" for="registerName"> Your Password</Form.Label>
                            </Form.Group>
                            <p className='text-danger'>{error}</p>

                            <div className='d-flex justify-content-center mb-3'>
                                <Button type="submit" class="btn  btn-primary btn-block mb-4">Register</Button>
                            </div>


                            <div class="text-center">
                                <p>Already a member? <Link to='/login'>Sign in</Link></p>
                            </div>
                        </Form>
                        <strong className='text-center'><p>Log in with:</p></strong>
                            <OverlayTrigger
                                overlay={
                                    <Tooltip >
                                        Sign in With Google
                                    </Tooltip>}
                            >
                                <Button onClick={handleGoogleSignIn} type="button" className='mx-2 d-flex mx-auto' variant="outline-primary">
                                    <FaGoogle></FaGoogle>
                                </Button>
                            </OverlayTrigger>
                           

                    </div>
                </Col>
                <Col lg='6'   >
                    <div className='h-100 w-100 d-flex'>
                    <Image fluid src={Registerimg}></Image>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Register;