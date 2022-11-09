import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const {  email } = user
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${email}`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(e => console.log(e))
    }, [email])

    return (
        <>
        <h4 className='text-center mt-5'> Your Comments in All Services</h4>
            <Table striped bordered responsive hover className='my-2'>
                <thead>
                    <tr>
                        <th>Your Id</th>
                        <th>Service Name</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        comments.map(comment => {
                            return (
                                <tr>
                                    <td>{email}</td>
                                    <td>{comment.serviceName} </td>
                                    <td>{comment.comment}</td>
                                    <td >
                                        <div className="btn-group d-flex " role="group" aria-label="Basic example">
                                            <Link to='/myreviews'><button type="button" className="btn btn-primary">Edit</button></Link>
                                            <button type="button" className="btn btn-danger">Delete</button>

                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </>
    );
};

export default MyReviews;