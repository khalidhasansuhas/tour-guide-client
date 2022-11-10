import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewEdit = () => {

    const router = useParams()

    const { id } = router;
    const { user, loading } = useContext(AuthContext)
    const { email } = user
    const [comment, setComment] = useState({})
    const [refresh, setRefresh] = useState(false)

    console.log(comment)

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
            .catch(e => console.log(e))
    }, [id, refresh])

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <div className='my-5  mx-auto'>
            <form onSubmit={handleSubmit} className="form-floating ">

                <div>
                    <input className='w-100 mt-2 p-2 ' type="email" name="email" id="" defaultValue={comment.serviceName} readOnly />
                    <label className='mb-3' htmlFor="floatingTextarea">Service Name</label>
                </div>
                <div>
                    <textarea name="comment" className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required defaultValue={comment.comment}></textarea>
                    <label htmlFor="floatingTextarea">Update your Review</label>
                </div>

                <div className='d-flex justify-content-center my-2'>
                    <Button type="submit" className="btn  btn-primary btn-block mb-4">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default ReviewEdit;