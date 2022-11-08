import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }


    return (



        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link type="button" className='btn btn-light' to='/home'>Home</Link>
                        <Link type="button" className='btn btn-light' to='/services'>Services</Link>
                        <Link type="button" className='btn btn-light' to='/blogs'>Blogs</Link>
                        <Link type="button" className='btn btn-light' to='/myreviews'>My Reviews</Link>
                        <Link type="button" className='btn btn-light' to='/addservice'>Add Service</Link>
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Button type="button" className={"btn btn-light"} onClick={handleLogOut}>Log Out</Button>

                                </>
                                :
                                <>
                                    <Link type="button" className={"btn btn-light"} to='/login'>Login</Link>
                                    <Link type="button" className={"btn btn-light"} to='/register'>Register</Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;