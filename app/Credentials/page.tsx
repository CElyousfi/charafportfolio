import Image from "next/image";
import Link from "next/link";
import bg1 from '@/public/images/bg1.png';
import me from '@/public/images/me.png';


export default function Credentials(){
    return(
        <>
            <section className="credential-area">
                <div className="container">
                    <div className="gx-row d-flex">
                        <div className="credential-sidebar-wrap" data-aos="zoom-in">
                            <div className="credential-sidebar text-center">
                                <div className="shadow-box">
                                    <Image src={bg1} alt="BG" className="bg-img" />
                                        <div className="img-box">
                                            <Image src={me} alt="About Me" />
                                        </div>
                                        <h2>EL YOUSFI Charaf</h2>
                                        <p>@Celyousfi</p>

                                        <ul className="social-links d-flex justify-content-center">
                                            <li><a href="credentials.html#"><i className="iconoir-dribbble"></i></a></li>
                                            <li><a href="credentials.html#"><i className="iconoir-twitter"></i></a></li>
                                            <li><a href="credentials.html#"><i className="iconoir-instagram"></i></a></li>
                                            <li><a href="credentials.html#"><i className="iconoir-facebook-tag"></i></a></li>
                                        </ul>

                                    <Link href="/Contact" className="theme-btn">Contact Me</Link>
                                </div>
                            </div>
                        </div>

                        <div className="credential-content flex-1">
                            <div className="credential-about" data-aos="zoom-in">
                                <h2>About Me</h2>
                                <p>I&apos;m Charaf, a dedicated Data Analytics Advocate based in vibrant Casablanca, Morocco. My expertise lies in the dynamic realms of Data Analytics and Augmented Reality (AR,VR,MR),WebAR, where I delve deep into patterns and insights to fuel innovation. Join me in a realm where data-driven strategies merge seamlessly with immersive experiences to shape a brighter future.</p>
                            </div>

                           {/* <div className="credential-edc-exp credential-experience">
                                <h2 data-aos="fade-up">Experience</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2007 - 2017</h4>
                                    <h3>Framer Designer & Developer</h3>
                                    <h5>Bluebase Designs</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>2017 - 2023</h4>
                                    <h3>Front-End Developer</h3>
                                    <h5>Larsen & Toubro</h5>
                                    <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                                </div>
                            </div>*/}

                            <div className="credential-edc-exp credential-education">
                                <h2 data-aos="fade-up">Certifications</h2>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>June , 2023</h4>
                                    <h3>Python for everybody</h3>
                                    <h5>University of Michigan</h5>
                                    <p>This Specialization builds on the success of the Python for Everybody
course and has introduce fundamental programming concepts
including data structures, networked application program interfaces,
and databases, using the Python programming language. In the
Capstone Project, you&apos;ll use the technologies learned throughout the
Specialization to design and create your own applications for data
retrieval, processing, and visualization.</p>
                                </div>
                                <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>Aug , 2023</h4>
                                    <h3>Meta Marketing Analytics Professional Certificate</h3>
                                    <h5>Meta</h5>
                                    <p>In this eight-course program by Aptly and Meta, I acquired key skills for a marketing analyst career. Mastering tools like Python, SQL, and Tableau, I applied the OSEMN framework, honing my ability to clean and analyze data. The hands-on projects, including optimizing campaigns with Meta Ads Manager, built a portfolio showcasing my expertise. Completing the Meta Marketing Science Professional Certification exam added a valuable certification to my achievements.</p>
                                </div>
                            </div>
                            <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>Mars , 2024</h4>
                                    <h3>Meta AR developer</h3>
                                    <h5>Meta</h5>
                                    <p>Through Meta&apos;s expertly crafted program, I, as a software professional, delved into the dynamic world of Augmented Reality (AR). Armed with skills in Unity, Spark AR, and Playcanvas, I explored AR applications in marketing, web environments, and games, mastering JavaScript and C#. The hands-on projects, including creating AR effects in Meta Spark and developing a web-based game, not only enriched my skill set but also provided a tangible portfolio showcasing my capabilities. This immersive learning experience has uniquely positioned me for exciting opportunities in AR development across diverse sectors, aligning perfectly with my career aspirations.</p>
                            </div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">85%</span>
                                        <h3 className="name">Tableau, Power BI, Matplotlib, and D3.js</h3>
                                        <p>Creating interactive dashboards, informative charts, and intuitive visuals, you communicate intricate insights clearly and engagingly, driving data-driven decision-making.</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">ETL processes,data warehousing</h3>
                                        <p>performance optimization principles improves system throughput and response times.</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">92%</span>
                                        <h3 className="name">Blender, play Canvas</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">90%</span>
                                        <h3 className="name">ARCore, ARKit, and AR.js</h3>
                                        <p>build immersive AR experiences, games, and apps with intuitive user interactions. </p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">81%</span>
                                        <h3 className="name">Blender</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">87%</span>
                                        <h3 className="name">Meta Spark</h3>
                                        <p>Non enim praesent</p>
                                    </div>
        

                                </div>
                            </div>

                      {/*      <div className="skills-wrap awards-wrap">
                                <h2 data-aos="fade-up">Awards</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">14 May 2020</span>
                                        <h3 className="name">Bluebase</h3>
                                        <p>Non enim praesent</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">26 June 2018</span>
                                        <h3 className="name">Demble</h3>
                                        <p>Non enim praesent</p>
                                    </div>

                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}