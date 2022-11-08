import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError()

    return (
        <div className='h-full'>
            <div className="row justify-content-center w-50 mx-auto  my-auto">
                <div className="col-md-12 col-sm-12">
                    <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" >
                        <h3 className="card-header display-1 text-muted text-center">
                            Error <span>{err.status}</span>
                        </h3>

                        <span className="card-subtitle mb-2 text-muted text-center">
                            Page you are looking for.. {err.statusText || err.message}
                        </span>

                        <div className="card-body mx-auto">
                            <Link type="button" to='/home'
                                className="btn btn-sm btn-danger text-white"> Back To Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;