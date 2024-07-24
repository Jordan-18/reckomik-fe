import React from 'react'

function FooterView() {
    return (
        <footer className="full-row pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="footer-widget media-widget mb-5">
                            <span className="text-uppercase text-light">Connect With Me</span>
                            <div className="h4"><span>jordanistiqlal@keifproject.com</span></div>
                        </div>
                        <div className="footer-widget media-widget mb-5">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="line-menu float-end list-color-general mb-5">
                            <li className="float-start"><a href="#">Advertise </a></li>
                            <li className="float-start"><a href="#">FAQ</a></li>
                            <li className="float-start"><a href="#">Terms & Service</a></li>
                            <li className="float-start"><a href="#">Disclaimer</a></li>
                        </ul>
                        <div className="text-end text-light w-100 d-table font-mini"><span>© 2024</span></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterView