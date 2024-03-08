import Image from "next/image";
import Link from "next/link";
import me2 from '@/public/images/me.png';
import bg1 from '@/public/images/bg1.png';
import icon from '@/public/images/icon.svg';
import icon2 from '@/public/images/icon2.png';
import sign from '@/public/images/sign.png';
import star2 from '@/public/images/star-2.png';


export default function About() {
    return (
        <>
            <section className="about-area">
                <div className="container">
                    <div className="d-flex about-me-wrap align-items-start gap-24">
                        <div data-aos="zoom-in">
                            <div className="about-image-box shadow-box">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <div className="image-inner">
                                    <Image src={me2} alt="About Me" />
                                </div>
                            </div>
                        </div>

                        <div className="about-details" data-aos="zoom-in">
                            <h1 className="section-heading" data-aos="fade-up">
                                <Image src={star2} alt="Star" />
                                Self-summary
                                <Image src={star2} alt="Star" />
                            </h1>
                            <div className="about-details-inner shadow-box">
                                <Image src={icon2} alt="Star" />
                                <h1>Charaf EL YOUSFI.</h1>
                                <p> I&apos;m Charaf, a dedicated Data Analytics Advocate based in vibrant Casablanca, Morocco. My expertise lies in the dynamic realms of Data Analytics and Augmented Reality (AR), where I delve deep into patterns and insights to fuel innovation. Join me in a realm where data-driven strategies merge seamlessly with immersive experiences to shape a brighter future.</p>
                            </div>

                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-experience shadow-box">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <h3>EXPERIENCE</h3>

                                <ul>
                                    <li>
                                        <p className="date">2007 - 2017</p>
                                        <h2>Framer Designer & Developer</h2>
                                        <p className="type">Bluebase Designs</p>
                                    </li>
                                    <li>
                                        <p className="date">2017 - 2023</p>
                                        <h2>Front-End Developer</h2>
                                        <p className="type">Larsen & Toubro</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-education shadow-box">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <h3>EDUCATION</h3>

                                <ul>
                                    <li>
                                        <p className="date">2004 - 2007</p>
                                        <h2>Bachelor Degree in Psychology</h2>
                                        <p className="type">University of California</p>
                                    </li>
                                    <li>
                                        <p className="date">2007 - 2009</p>
                                        <h2>Master Degree in Designing</h2>
                                        <p className="type">University of Texas</p>
                                    </li>
                                </ul>
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
                                            <a href="/">
                                                <i className="iconoir-dribbble"></i>
                                            </a>
                                            <a href="/">
                                                <i className="iconoir-twitter"></i>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>Stay with me</h4>
                                                <h1>Profiles</h1>
                                            </div>

                                            <Link href="/" className="about-btn">
                                                <Image src={icon} alt="Button" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-contact-box info-box shadow-box">
                                        <Link className="overlay-link" href="/"></Link>
                                        <Image src={bg1} alt="BG" className="bg-img" />
                                        <Image src={icon2} alt="Icon" className="star-icon" />
                                        <h1>Let&apos;s <br />work <span>together.</span></h1>
                                        <Link href="/" className="about-btn">
                                            <Image src={icon} alt="Button" />
                                        </Link>
                                    </div>
                                </div>

                                <div data-aos="zoom-in" className="h-full">
                                    <div className="about-crenditials-box info-box shadow-box">
                                        <Link className="overlay-link" href="/"></Link>
                                        <Image src={bg1} alt="BG" className="bg-img" />
                                        <Image src={sign} alt="Sign" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>more about me</h4>
                                                <h1>Credentials</h1>
                                            </div>

                                            <Link href="/" className="about-btn">
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
    );
};