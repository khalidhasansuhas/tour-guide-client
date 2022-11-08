import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    return (
        <Table striped bordered hover className='my-5'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents </td>
                    <td>Otto</td>
                    <td >
                        <div  className="btn-group " role="group" aria-label="Basic example">
                            <Link to='/myreviews'><button type="button" className="btn btn-primary">Edit</button></Link>
                            <button type="button" className="btn btn-danger">Delete</button>
                      
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>

            </tbody>
        </Table>
    );
};

export default MyReviews;