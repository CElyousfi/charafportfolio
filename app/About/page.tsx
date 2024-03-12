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
                                <p> I&apos;m Charaf, a dedicated Data Analytics Advocate based in vibrant Casablanca, Morocco. My expertise lies in the dynamic realms of Data Analytics and Augmented Reality (AR,VR,MR),WebAR, where I delve deep into patterns and insights to fuel innovation. Join me in a realm where data-driven strategies merge seamlessly with immersive experiences to shape a brighter future.</p>
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
                                        <p className="date">November 2020 - Mars 2022</p>
                                        <h2>Account Manager Junior</h2>
                                        <p className="type">Evrim Agency</p>    
                                    </li>
                                     <li>
                                        <p className="date">July 2023 - August 2023</p>
                                        <h2>Summer Internship</h2>
                                        <p className="type">OmiaDATA</p>
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
                                        <p className="date">2018</p>
                                        <h2>High School Diploma</h2>
                                        <p className="type">Groupe Scholaire Ouhoud</p>
                                    </li>
                                    <li>
                                        <p className="date">Now</p>
                                        <h2>Software Engineering Student</h2>
                                        <p className="type">EMSI</p>
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
                                            <a href="https://github.com/CElyousfi">
                                                <i className="iconoir-github"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/in/charaf-el-yousfi-b84937279/">
                                                <i className="iconoir-linkedin"></i>
                                            </a>
                                            <a href="https://medium.com/@charafelyousfi3">
                                                <i className="iconoir-medium"></i>
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
    );
};