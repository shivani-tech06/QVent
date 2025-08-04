import React from "react";
const About = () => {
    return (
        <section className="py-3 py-md-5 py-xl-8 p-3 mb-2 bg-dark text-white">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="mb-4 display-5 text-center">About Us</h2>
                        <p className="text-secondary mb-5 text-center lead fs-4">At QR-EMS, we revolutionize event management with cutting-edge QR code technology,
                            simplifying the way events are organized, managed, and experienced. Our mission is to create seamless, contactless, and efficient event solutions that empower organizers and enhance attendee satisfaction.</p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row gy-4 gy-lg-0 align-items-lg-center">
                    <div className="col-12 col-lg-6 ">
                        <img className="img-fluid rounded border border-dark" loading="lazy" src="event.jpeg" width="700" alt="About Us" />
                    </div>
                    <div className="col-12 col-lg-6 col-xxl-6">
                        <div className="row justify-content-lg-end">
                            <div className="col-12 col-lg-11">
                                <div className="about-wrapper">
                                    <p className="lead mb-4 mb-md-5">This QR code based event management system effectively addressed the client's need for a streamlined, user-friendly event registration and check-in process, providing valuable data insights and significantly enhancing the overall event experience for both organizers and attendees.</p>
                                    <div className="row gy-4 mb-4 mb-md-5">
                                        <div className="col-12 col-md-6">
                                            <div className="card border border-dark">
                                                <div className="card-body p-4">
                                                    <h3 className="display-5 fw-bold text-primary text-center mb-2">370+</h3>
                                                    <p className="fw-bold text-center m-0">Total Events</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="card border border-dark">
                                                <div className="card-body p-4">
                                                    <h3 className="display-5 fw-bold text-primary text-center mb-2">18k+</h3>
                                                    <p className="fw-bold text-center m-0">Satisfied Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;