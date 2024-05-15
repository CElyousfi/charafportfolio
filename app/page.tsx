import Image from "next/image";
import Link from "next/link";
import me from '@/public/images/me.png';
import bg1 from '@/public/images/bg1.png';
import icon from '@/public/images/icon.svg';
import icon2 from '@/public/images/icon2.png';
import star1 from '@/public/images/star1.svg';
import sign from '@/public/images/sign.png';
import gfonts from '@/public/images/gfonts.png';
import myworks from '@/public/images/my-works.png';

export default function Home() {
    return (
        <>
            {/* About */}
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        {/* Here information about u name description + image of u  */}
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-me-box shadow-box">
                                <Link className="overlay-link" href="/About"></Link>
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <div className="img-box">
                                    <Image src={me} alt="About Me" />
                                </div>
                                <div className="infos">
                                    <h4>Data Analytics Advocate <br />AR Developper</h4>
                                    <h1>Charaf <br />EL YOUSFI.</h1>
                                    <p>I am a data analyst & an AR Developper based in Casablanca.</p>
                                    <Link href="/About" className="about-btn">
                                        <Image src={icon} alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End of this section */}

                        <div className="col-md-6">
                            <div className="about-credentials-wrap">
                                {/* List Marquee */}
                                <div data-aos="zoom-in">
                                    <div className="banner shadow-box">
                                        <div className="marquee">
                                            <div>
                                                <span>
                                                    Data <b>Analytics</b> Advocate
                                                    <Image src={star1} alt="Star" />
                                                     <b>Engineering Student </b>Driven by <b>Data insights</b>
                                                    <Image src={star1} alt="Star" />
                                                    AR Developper <b>AR Developper</b>
                                                    <Image src={star1} alt="Star" />
                                                    Data <b>Analytics</b> Advocate
                                                    <Image src={star1} alt="Star" />
                                                     <b>Engineering Student </b> Driven by <b>Data insights</b>
                                                    <Image src={star1} alt="Star" />
                                                    AR Developper <b>AR Developper</b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* End of this section */}

                                <div className="gx-row d-flex gap-24">
                                    {/* To About page */}
                                    <div data-aos="zoom-in">
                                        <div className="about-crenditials-box info-box shadow-box h-full">
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
                                    {/* End of this section */}

                                    {/* Link to works page */}

                                    <div data-aos="zoom-in">
                                        <div className="about-project-box info-box shadow-box h-full">
                                            <Link className="overlay-link" href="/Works"></Link>
                                            <Image src={bg1} alt="BG" className="bg-img" />
                                            <Image src={myworks} alt="My Works" className="Work-image" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>SHOWCASE</h4>
                                                    <h1>Projects</h1>
                                                </div>

                                                <Link href="/" className="about-btn">
                                                    <Image src={icon} alt="Button" />
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                    {/* End of this section */}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="blog-service-profile-wrap d-flex gap-24">
                                {/* Try to find something else than blog page */}
                                <div data-aos="zoom-in">
                                    <div className="about-blog-box info-box shadow-box h-full">
                                        <Link href="/" className="overlay-link"></Link>
                                        <Image src={bg1} alt="BG" className="bg-img"   />
                                        <Image src={gfonts} alt="GFonts" className="Work-image"/>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>Resume</h4>
                                                <h1>Download</h1>
                                            </div>

                                            <Link href="C:\Users\hp\Downloads\charafportfolio\public\cv\Lucas Porter-Bakker.pdf" className="about-btn">
                                                <Image src={icon} alt="Button" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                {/* End of this section */}

                                {/* Service offering */}

                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-services-box info-box shadow-box h-full">
                                        <Link href="/Specialization" className="overlay-link"></Link>
                                        <Image src={bg1} alt="BG" className="bg-img" />
                                        <div className="icon-boxes">
                                            <i className="iconoir-graph-up"></i>
                                            <i className="iconoir-stat-up"></i>
                                            <i className="iconoir-magic-wand"></i>
                                            <i className="iconoir-augmented-reality"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>specialization</h4>
                                                <h1>Set of skills</h1>
                                            </div>

                                            <Link href="/Service" className="about-btn">
                                                <Image src={icon} alt="Button" />
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                {/* End of this section */}


                                {/* Social media links choose 2 important */}

                                <div data-aos="zoom-in">
                                    <div className="about-profile-box info-box shadow-box h-full">
                                        <Image src={bg1} alt="BG" className="bg-img" />
                                        <div className="inner-profile-icons shadow-box">
                                            <Link href="https://github.com/CElyousfi">
                                                <i className="iconoir-github-circle"></i>
                                            </Link>
                                            <Link href="https://www.linkedin.com/in/charaf-el-yousfi-b84937279/">
                                                <i className="iconoir-linkedin"></i>
                                            </Link>
                                            <Link href="https://medium.com/@charafelyousfi3">
                                                <i className="iconoir-medium"></i>
                                            </Link>
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

                                {/* End of this section */}

                            </div>
                        </div>

                    </div>

                    <div className="row mt-24">
                        {/* Yers expreriend CLient and total projects etc ... */}
                        <div className="col-md-6" data-aos="zoom-in">

                            <div className="about-client-box info-box shadow-box">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div className="client-item">
                                        <h1>24</h1>
                                        <p>Years <br />old</p> 
                                    </div>

                                    <div className="client-item">
                                        <h1>+125</h1>
                                        <p>CLIENTS <br />WORLDWIDE</p>
                                    </div>

                                    <div className="client-item">
                                        <h1>+210</h1>
                                        <p>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* End of this section */}

                        {/* Lets work together my friend peace of shit dial charaf dzeb */}
                        <div className="col-md-6" data-aos="zoom-in">

                            <div className="about-contact-box info-box shadow-box">
                                <Link className="overlay-link" href="/Contact"></Link>
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <Image src={icon2} alt="Icon" className="star-icon" />
                                <h1>Let&apos;s <br />work <span>together.</span></h1>
                                <Link href="/" className="about-btn">
                                    <Image src={icon} alt="Button" />
                                </Link>
                            </div>

                        </div>
                        {/* End of this section */}
                    </div>
                </div>
            </section>
        </>
    );
};