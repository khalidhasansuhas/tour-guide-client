import React from 'react';

// const handleSubmit= (e) =>{
//     e.preventDefault()
// }
const AddService = () => {
    return (
        <>
            <div className='p-5 mt-5 border border-secondary'>
                <h3 className='text-center pb-5'>Add a Service</h3>

                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Your Service Name</label>
                        <input name='serviceName' type="text" class="form-control" id="exampleFormControlInput1" placeholder="premium/economy/kamla" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Photo URL of your Service (basically tourist spot)</label>
                        <input name='photoURL' type="text" class="form-control" id="exampleFormControlInput1" placeholder="photoURL" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Your Service duration in days</label>
                        <input name='days' type="text" class="form-control" id="exampleFormControlInput1" placeholder="in number (1-30)" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Your Service Cost</label>
                        <input name='payment' type="text" class="form-control" id="exampleFormControlInput1" placeholder="in number" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">tourist spot you will serve</label>
                        <input name='spot' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your service spot" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Description of your service</label>
                        <textarea name='description' type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                    </div>
                    <div className='w-100 d-flex justify-content-center'>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </>
        
    );
};

export default AddService;