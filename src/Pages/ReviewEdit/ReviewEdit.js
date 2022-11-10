import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const ReviewEdit = () => {
    const navigate = useNavigate();
    useTitle('Edit Review')

    const router = useParams()

    const { id } = router;
    const { loading } = useContext(AuthContext)
  
    const [comment, setComment] = useState({})

    console.log(comment)

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
            .catch(e => console.log(e))
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault()
        const value =event.target.comment.value
        const comment = {
            comment: value
        };

        fetch(`http://localhost:5000/comments/${id}`,{
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){

                    navigate('/myreviews')
                }
            })
            .catch(e => console.log(e))

    }
    if(loading){
        return <Spinner className='d-flex mx-auto pt-5 my-5' animation="border" variant="primary"></Spinner>
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