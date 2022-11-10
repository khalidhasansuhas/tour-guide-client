import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const { email } = user
    const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)
    useTitle('MyReviews')


    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${email}`, {
            headers: {
                suthorization: `Bearer ${localStorage.getItem('tour-guide')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logOut()
                }
                res.json()
            })
            .then(data => setComments(data))
            .catch(e => console.log(e))
    }, [email, refresh, logOut])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/comments/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Review deleted successfully')
                        setRefresh(!refresh)
                    }
                })
                .catch(e => console.log(e))
        }

    }
    const navigate = useNavigate()
    const handleEdit = (id) => {
        navigate(`/myreviews/edit/${id}`)
    }
    if (loading) {
        return <Spinner className='d-flex mx-auto pt-5 my-5' animation="border" variant="primary"></Spinner>
    }

    return (
        <>
            {
                comments?.length ? <><h4 className='text-center mt-5'> Your Reviews in All Services</h4></>
                    :
                    <><h4 className='text-center mt-5'> 'No reviews were added' </h4></>
            }

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
                                    <td><strong>{comment.serviceName}</strong> </td>
                                    <td>{comment.comment}</td>
                                    <td >
                                        <div className="btn-group d-flex " role="group" aria-label="Basic example">
                                            <Link to={`/myreviews/edit/${comment._id}`}><button onClick={() => handleEdit(comment._id)} type="button" className="btn btn-primary">Edit</button></Link>
                                            <button onClick={() => handleDelete(comment._id)} type="button" className="btn btn-danger">Delete</button>

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