import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mx-auto m-20 px-20'>
            <h2 className='my-5 text-center text-3xl text-blue-400'>Questions :</h2>
            <br />
            <div className='border rounded border-lime-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question : What is the difference between SQL and NoSQL ?</p>
                <p>Answer : SQL databases are primarily called as Relational Databases (RDBMS). Whereas NoSQL database are primarily called as non-relational or distributed database. <br /> <br /> SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc . <br />
                    <br />
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc .<br /> <br />
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. </p>

            </div>
            <br />

            <div className='border rounded border-red-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question : What is JWT, and how does it work?</p>
                <p>Answer :  JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key or a public key pair by the Identity Provider(IdP). JWT is signed and encoded, not encrypted. <br /> <br />
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.
                </p>
            </div>
            <br />

            <div className='border rounded border-amber-400 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question : What is the difference between javascript and NodeJS ?</p>
                <p>Answer : JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br /> <br />
                    NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br /> <br />
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br /> <br />
                    Javascript is capable enough to add HTML and play with the DOM.It is basically used on the client-side. Nodejs does not have capability to add HTML tags. It is mostly used on the server-side.
                </p>

            </div>
            <br />

            <div className='border rounded border-indigo-500 p-8'>
                <p className='text-lg text-sky-600 mb-5'>Question : How does NodeJS handle multiple requests at the same time?</p>
                <p>Answer : NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                 If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>

            </div>
            <br />
        </div>
    );
};

export default Blogs;