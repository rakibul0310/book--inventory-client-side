import React from 'react';

const Blogs = () => {
    return (
        <div className='px-2 md:px-10 flex flex-col justify-center items-center my-4 min-h-screen'>
            <h2 className='text-3xl underline font-bold text-[#1566AA] mb-8'>Blogs</h2>
            <div>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <h3 className='font-semibold mb-5 text-3xl text-gray-700'>Q1: Difference between javascript and nodejs</h3>
                    <table className='border-collapse border border-slate-500 w-3/4 text-center p-3'>
                        <thead>
                            <tr className='text-xl bg-blue-300/90 text-gray-700'>
                                <th className='border border-slate-500 py-3'>Javascript</th>
                                <th className='border border-slate-500 py-3'>nodeJS</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            <tr>
                                <td className='border border-slate-500 py-3'>Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td className='border border-slate-500 py-3'>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>Javascript can only be run in the browsers.</td>
                                <td className='border border-slate-500 py-3'>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>It is basically used on the client-side.</td>
                                <td className='border border-slate-500 py-3'>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>Javascript is capable enough to add HTML and play with the DOM.</td>
                                <td className='border border-slate-500 py-3'>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>Javascript is used in frontend development.</td>
                                <td className='border border-slate-500 py-3'>Nodejs is used in server-side development.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-20 text-lg px-5'>
                    <h3 className='font-semibold mb-5 text-3xl text-gray-700'>Q2: When should you use nodejs and when should you use mongodb?</h3>
                    <div className='w-3/4'>
                        <h4 className='text-left font-semibold'>When use nodeJS:</h4>
                    </div>
                    <p className='w-full md:w-3/4 text-justify'>nodeJS is especially suited for applications that require persistent connection from the browser back to the server. - such as chat programs, or interactive games. So, if any application needs persistent connection from the browser back to the server then that type of application we should use nodeJS.</p>
                    <div className='w-3/4 mt-4'>
                        <h4 className='text-left font-semibold'>When use nodeJS:</h4>
                    </div>
                    <p className='w-full md:w-3/4 text-justify'>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-20'>
                    <h3 className='font-semibold mb-5 text-3xl text-gray-700'>Q3: Differences between sql and nosql databases.</h3>
                    <table className='border-collapse border border-slate-500 w-3/4 text-center p-3'>
                        <thead>
                            <tr className='text-xl bg-blue-300/90 text-gray-700'>
                                <th className='border border-slate-500 py-3'>SQL</th>
                                <th className='border border-slate-500 py-3'>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody className='text-lg'>
                            <tr>
                                <td className='border border-slate-500 py-3'>Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td className='border border-slate-500 py-3'>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>These databases have fixed or static or predefined schema</td>
                                <td className='border border-slate-500 py-3'>They have dynamic schema</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>These databases are not suited for hierarchical data storage.</td>
                                <td className='border border-slate-500 py-3'>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>
                                <td className='border border-slate-500 py-3'>These databases are best suited for complex queries</td>
                                <td className='border border-slate-500 py-3'>These databases are not so good for complex queries</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-col justify-center items-center mb-10 mt-20 px-4'>
                    <h3 className='font-semibold mb-5 text-3xl text-gray-700'>Q4: What is the purpose of jwt and how does it work?</h3>
                    <p className='w-full md:w-3/4 text-justify text-lg'>JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML. <br /> JWTs are used as a secure way to authenticate users and share information. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;