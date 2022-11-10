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
                                    src="https://porzoton.com/wp-content/uploads/2020/03/Coxs-Bazar-Sea-Beach-00.jpg"
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
                                    src="https://prod-media-eng.dhakatribune.com/uploads/2020/09/9-new-project-1599296482873.jpg"
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
                                    src="https://i.ytimg.com/vi/LNSZjsjeTog/maxresdefault.jpg"
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
                                    src="https://i.pinimg.com/originals/36/e7/fd/36e7fd49ef72514751dae238ca8537f2.jpg"
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
                                    src="https://new-media.dhakatribune.com/en/uploads/2022/02/05/sajek-pic-1-1598953304911.jpeg"
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
                                    src="https://porzoton.com/wp-content/uploads/elementor/thumbs/Shat_Gombuj_Mosque-oyxcq1vua6d3su8tm6ge4ebfdtmz78q2jqjvy1g5cu.jpg"
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