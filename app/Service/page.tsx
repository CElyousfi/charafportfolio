import Image from "next/image";
import Link from "next/link";
import star2 from '@/public/images/star-2.png';
import sign from '@/public/images/sign.png';
import icon from '@/public/images/icon.svg';
import icon2 from '@/public/images/icon2.png';

import bg1 from '@/public/images/bg1.png';


export default function Service() {
    return (
        <>

            <section className="service-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up"><Image src={star2} alt="Star" /> My Offerings <Image src={star2} alt="Star" /></h1>

                        <div className="row">

                            <div className="col-md-4">
                                <div className="service-sidebar" data-aos="fade-right">
                                    <div className="service-sidebar-inner shadow-box">
                                        <ul>
                                            <li>
                                                <i className="iconoir-camera icon"></i>
                                                PHOTOGRAPHY
                                            </li>
                                            <li>
                                                <i className="iconoir-design-pencil icon"></i>
                                                WEB DESIGNING
                                            </li>
                                            <li>
                                                <i className="iconoir-color-filter icon"></i>
                                                BRANDING
                                            </li>
                                            <li>
                                                <i className="iconoir-dev-mode-phone icon"></i>
                                                DEVELOPMENT
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <h1 className="section-heading" data-aos="fade-up"><Image src={star2} alt="Star" /> My Offerings <Image src={star2} alt="Star" /></h1>

                                    <div className="service-content-wrap" data-aos="zoom-in">
                                        <div className="service-content-inner shadow-box">
                                            <div className="service-items">
                                                <div className="service-item">
                                                    <h3>Photography</h3>
                                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                                </div>
                                                <div className="service-item">
                                                    <h3>Web Designing</h3>
                                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                                </div>
                                                <div className="service-item">
                                                    <h3>Branding</h3>
                                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                                </div>
                                                <div className="service-item">
                                                    <h3>Development</h3>
                                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div className="row mt-24">
                                <div className="col-md-12">
                                    <div className="d-flex profile-contact-credentials-wrap gap-24">

                                        <div data-aos="zoom-in">
                                            <div className="about-profile-box info-box shadow-box h-full">
                                                <Image src={bg1} alt="BG" className="bg-img" />
                                                    <div className="inner-profile-icons shadow-box">
                                                        <a href="service.html#">
                                                            <i className="iconoir-dribbble"></i>
                                                        </a>
                                                        <a href="service.html#">
                                                            <i className="iconoir-twitter"></i>
                                                        </a>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="infos">
                                                            <h4>Stay with me</h4>
                                                            <h1>Profiles</h1>
                                                        </div>

                                                        <Link href="/Contact" className="about-btn">
                                                            <Image src={icon} alt="Button" />
                                            </Link>

                                                    </div>
                                            </div>
                                        </div>

                                        <div data-aos="zoom-in" className="flex-1">
                                            <div className="about-contact-box info-box shadow-box">
                                        <Link className="overlay-link" href="/Contact"></Link>
                                                <Image src={bg1} alt="BG" className="bg-img" />
                                                    <Image src={icon2} alt="Icon" className="star-icon" />
                                                        <h1>Let's <br />work <span>together.</span></h1>
                                        <Link href="/Contact" className="about-btn">
                                                            <Image src={icon} alt="Button" />
                                        </Link>
                                                    </div>
                                            </div>

                                            <div data-aos="zoom-in" className="h-full">
                                                <div className="about-crenditials-box info-box shadow-box">
                                        <Link className="overlay-link" href="/Credentials"></Link>
                                                    <Image src={bg1} alt="BG" className="bg-img" />
                                                        <Image src={sign} alt="Sign" />
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="infos">
                                                                    <h4>more about me</h4>
                                                                    <h1>Credentials</h1>
                                                                </div>

                                            <Link href="/Credentials" className="about-btn">
                                                                    <Image src={icon} alt="Button" />
                                            </Link>

                                                            </div>
                                                        </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
        </>
    )
}
