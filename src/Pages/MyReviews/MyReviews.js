import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const { email } = user
    const [comments, setComments] = useState([])
    const [refresh, setRefresh] = useState(false)
    useTitle('MyReviews')


    useEffect(() => {
        fetch(`https://tour-guide-server-mu.vercel.app/comments?email=${email}`)
            .then(res => res.json())
            .then(data => {setComments(data)})
            .catch(e => console.log(e))
    }, [email, refresh, logOut])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You sure you want to delete?')
        if (proceed) {
            fetch(`https://tour-guide-server-mu.vercel.app/comments/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire(
                            'Good job!',
                            'Your review is deleted!',
                            'success'
                          )
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