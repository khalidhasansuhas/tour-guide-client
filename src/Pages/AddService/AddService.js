import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

// const handleSubmit= (e) =>{
//     e.preventDefault()
// }
const AddService = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
            <div className='p-5 mt-5 border border-secondary'>
                <h3 className='text-center pb-5'>{user.displayName}</h3>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Service Name</label>
                        <input name='serviceName' type="text" className="form-control" id="exampleFormControlInput1" placeholder="premium/economy/kamla" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Photo URL of your Service (basically tourist spot)</label>
                        <input name='photoURL' type="text" className="form-control" id="exampleFormControlInput1" placeholder="photoURL" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Service duration in days</label>
                        <input name='days' type="text" className="form-control" id="exampleFormControlInput1" placeholder="in number (1-30)" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Service Cost</label>
                        <input name='payment' type="text" className="form-control" id="exampleFormControlInput1" placeholder="in number" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">tourist spot you will serve</label>
                        <input name='spot' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your service spot" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input name='email' type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description of your service</label>
                        <textarea name='description' type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </>
        
    );
};

export default AddService;