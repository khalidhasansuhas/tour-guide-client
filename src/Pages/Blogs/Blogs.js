import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <>
        <h2 className='text-center mt-5 '>Frequently Asked Questions </h2>
        <Accordion className='my-5'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>what is the difference between SQL and NoSQL?</Accordion.Header>
                <Accordion.Body>
                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is JWT? How does it work?</Accordion.Header>
                <Accordion.Body>
                    JWT: <br />
                    JWT or JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.
                    <br />
                    How it works:
                    <br />
                    Once verified, the API will create a JSON Web Token and sign it using a secret key. Then, the API will return that token back to the client application. Finally, the client app will receive the token, verify it on its own side to ensure it's authentic, and then use it on every subsequent request.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is the difference between JavaScript and node.JS?</Accordion.Header>
                <Accordion.Body>
                JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter. <br />
                on the other hand, Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking asynchronous I/O for creating highly scalable server-side JavaScript applications. 
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How NodeJS handle multiple client requests?

                </Accordion.Header>
                <Accordion.Body>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
};

export default Blogs;