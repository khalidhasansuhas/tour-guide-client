import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <footer className="text-center text-white bg-container" >
             <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with me in social networks:</span>
        </div>

        <div>
          <Link to='/home' className='me-4 text-reset'>
            <FaFacebook />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaTwitter />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaGoogle />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaInstagram />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaLinkedin />
          </Link>
          <Link to='/home' className='me-4 text-reset'>
            <FaGithub />
          </Link>
        </div>
      </section>
            <div className="container p-4">
                <section className="">
                    <div className="row">
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                        
                                    ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                        
                                    ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                        
                                    ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                       
                                    ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                       
                                    ></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                            <div
                                className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                data-ripple-color="light"
                            >
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                                    className="w-100"
                                    alt=''
                                />
                                <a href="#!">
                                    <div
                                        className="mask bg-img"
                                        
                                    ></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="text-center  p-3" >
                © 2020 Copyright: 
                <a className="text-white" href="khalidhasansuhas@gmail.com/"> khalidhasansuhas@gmail.com</a>
            </div>
        </footer>
    );
};

export default Footer;