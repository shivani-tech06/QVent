import React from "react";
export default function Footer() {
    return (
        <footer className="text-center text-white bg-secondary">
            <div className="container">

                <hr className="my-3" />
                <section className="text-center mb-5">
                    <a href="https://www.facebook.com/" className="text-white me-5">
                        <i className="fab fa-facebook ">  Facebook</i>
                    </a>
                    <a href="https://x.com/?lang=en" className="text-white me-4">
                        <i className="fab fa-twitter">  Twitter</i>
                    </a>
                    <a href="https://www.instagram.com/" className="text-white me-4">
                        <i className="fab fa-instagram">  Instagram</i>
                    </a>
                    <a href="https://www.linkedin.com/home" className="text-white me-4">
                        <i className="fab fa-linkedin">  Linkedin</i>
                    </a>
                    <a href="https://github.com/" className="text-white me-4">
                        <i className="fab fa-github">  Github</i>
                    </a>
                </section>
            </div>
            <div className="text-center bg-dark">
                © 2025 Copyright :
                <a className="text-white">EventManagement.com</a>
            </div>
        </footer>
    );
}