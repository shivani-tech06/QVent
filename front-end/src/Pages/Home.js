import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            < nav className="navbar navbar-expand-lg p-3 mb-12 bg-info text-dark" >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="logo.svg" alt="Bootstrap" width="80" height="80" class="rounded-circle" />
                    </a>
                    <a className="navbar-brand text-white" href="#">QR-Code Based EMS</a>
                    <div className="collapse navbar-collapse " id="root">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-light" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link active text-light" aria-current="page">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active text-light" aria-current="page">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-light" aria-current="page">About</Link>
                            </li>
                        </ul>
                        <form>
                            <Link to="/login"> <button className="btn btn-secondary mx-2" type="Login">Login</button> </Link>
                            <Link to="/register"> <button className="btn btn-secondary mx-2" type="Register">Register</button> </Link>
                        </form>
                    </div>
                </div>
            </nav >
            <div className="p-12 mb-12 bg-dark text-white">
                <div className="containner-fluid m-1">
                    <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="event3.jpg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="home.jpg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="home2.jpeg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="event.jpg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="event1.jpg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="logo.jpg" className="d-block" width="100%" height="550" alt="Loading" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div className="m-5">
                    <div className="border-0">
                        <div className="text-center row d-flex m-5">
                            <div className="embed-responsive embed-responsive-21by9 col-lg-5">
                                <iframe className="embed-responsive-item" src="video.mp4"></iframe>
                            </div>
                            <div className="col-lg-7 m-7">
                                <div className="px-4 py-5">
                                    <p>QR codes can make event management more efficient and engaging for attendees.
                                        They can also reduce paper waste and the need to manually enter event details.
                                        QR codes are a type of barcode that can be scanned by a smartphone camera to access the information stored within them.
                                        A QR code-based event management system is a digital platform that utilizes QR codes to automate and optimize event management processes.
                                        Each attendee is provided with a unique QR code that serves as their digital ticket or identification.
                                        This code can be scanned at various checkpoints during the event for verification, entry, and tracking purposes.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-center">Our Events</h1>
                <div className="card-deck m-5">
                    <div className="card my-3">
                        <img src="events.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">RAMSITA-2025</h5>
                            <p className="card-text">Departmet of Computer Science and Information Technology  is organizing an
                                International conference on Recent Advancement Modernization in Sustainable Intelligent in Technology & Application.</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 07/02/2025</button>
                        </div>
                    </div>
                    <div className="card my-3">
                        <img src="events1.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">ARDOR-2025</h5>
                            <p className="card-text">The Acropolis Institute of Technology and Research(AITR) is Celebrating the Annual Day "ARDOR 2025".</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 22/03/2025</button>
                        </div>
                    </div>
                    <div className="card my-3">
                        <img src="events3.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">SUI-IEEE Hackathon</h5>
                            <p className="card-text">Get ready to code ,innovate, and push your limits! This is your chance to collaborate, brainstorm, and build sumthing amazing.</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 29/03/2025</button>
                        </div>
                    </div>
                </div>
                <div className="card-deck m-5">
                    <div className="card my-3">
                        <img src="events.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">RAMSITA-2025</h5>
                            <p className="card-text">Departmet of Computer Science and Information Technology  is organizing an
                                International conference on Recent Advancement Modernization in Sustainable Intelligent in Technology & Application.</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 07/02/2025</button>
                        </div>
                    </div>
                    <div className="card my-3">
                        <img src="events1.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">ARDOR-2025</h5>
                            <p className="card-text">The Acropolis Institute of Technology and Research(AITR) is Celebrating the Annual Day "ARDOR 2025".</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 22/03/2025</button>
                        </div>
                    </div>
                    <div className="card my-3">
                        <img src="events3.jpeg" className="card-img-top" alt="Loading" />
                        <div className="card-body">
                            <h5 className="card-title">SUI-IEEE Hackathon</h5>
                            <p className="card-text"> Get ready to code ,innovate, and push your limits! This is your chance to collaborate, brainstorm, and build sumthing amazing.</p>
                            <p className="card-text"></p>
                        </div>
                        <div className="row mb-3 px-5">
                            <button type="submit" className="btn btn-info">DATE -: 29/03/2025</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}