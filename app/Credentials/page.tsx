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
                                            <li><a href="https://github.com/CElyousfi"><i className="iconoir-github-circle"></i></a></li>
                                            <li><a href="www.linkedin.com/in/charaf-el-yousfi-b84937279"><i className="iconoir-linkedin"></i></a></li>
                                            <li><a href="https://medium.com/@charafelyousfi3"><i className="iconoir-medium"></i></a></li>
                                            {/*<li><a href="credentials.html#"><i className="iconoir-facebook-tag"></i></a></li>*/}
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
                                    <h3><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/WWWRMFPEE7SM">Python for everybody</a></h3>
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
                                    <h3><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/UWF6LEXEYUU4">Meta Marketing Analytics Professional Certificate</a></h3>
                                    <h5>Meta</h5>
                                    <p>In this specialization, learners developed and honed essential
marketing analytics skills, including basic principles of marketing,
analytics tasks such as using SQL queries to pull data from a database
and cleaning data using spreadsheets. Learners also developed a
foundational understanding of statistics, explored common analytics
methods used by marketers to evaluate and communicate the results
of advertising campaigns and Meta Marketing analytics tools.</p>
                                </div>
                            <div className="credential-edc-exp-item" data-aos="zoom-in">
                                    <h4>Mars , 2024</h4>
                                    <h3>Meta AR developer</h3>
                                    <h5>Meta</h5>
                                    <p>Through Meta&apos;s expertly crafted program, I, as a software professional, delved into the dynamic world of Augmented Reality (AR). Armed with skills in Unity, Spark AR, and Playcanvas, I explored AR applications in marketing, web environments, and games, mastering JavaScript and C#. The hands-on projects, including creating AR effects in Meta Spark and developing a web-based game, not only enriched my skill set but also provided a tangible portfolio showcasing my capabilities. This immersive learning experience has uniquely positioned me for exciting opportunities in AR development across diverse sectors, aligning perfectly with my career aspirations.</p>
                            </div>
                        </div>

                            <div className="skills-wrap">
                                <h2 data-aos="fade-up">Skills</h2>
                                <div className="d-grid skill-items gap-24 flex-wrap">
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">95%</span>
                                        <h3 className="name">Data Visualization and Storytelling</h3>
                                        <p> Skilled in Tableau, Power BI, Matplotlib, and D3.js, you transform complex data into compelling visuals. You craft interactive dashboards, informative charts, and intuitive representations that communicate insights clearly and drive data-driven decisions.</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">85%</span>
                                        <h3 className="name">Data Optimization and Performance Tuning</h3>
                                        <p>You optimize data processes and pipelines for efficient performance. Leveraging indexing, partitioning, and query rewriting, you fine-tune database queries, ETL processes, and data warehousing solutions to improve throughput and response times.</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">70%</span>
                                        <h3 className="name">AR Development and User Interaction</h3>
                                        <p>Proficient in ARCore, ARKit, and AR.js, you build immersive AR experiences with intuitive interactions. From world tracking and plane detection to gestural or voice controls, you create engaging user interfaces blending digital and physical worlds.</p>
                                    </div>
                                    <div className="skill-item" data-aos="zoom-in">
                                        <span className="percent">75%</span>
                                        <h3 className="name">3D Modeling and Computer Vision</h3>
                                        <p>With expertise in 3D modeling tools like Blender and Maya, you create realistic 3D assets for AR. You integrate computer vision capabilities like object detection, tracking, and spatial mapping using OpenCV, ARCore APIs, and ARKit APIs for enhanced experiences.</p>
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