'use client';
import { useState } from 'react';
import Image from "next/image";
import axios from 'axios';
import icon3 from '@/public/images/icon3.png';
import bg1 from '@/public/images/bg1.png';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',

    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.post('/api/', formState);
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

        } catch (error) {
            console.log("Erreur lors de l'envoi du mail : ", error);
        }
    };
    return (
        <>
            <section className="contact-area">
                <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                        <div className="contact-infos">
                            <h3 data-aos="fade-up">Contact Info</h3>
                            <ul className="contact-details">
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-mail"></i>
                                    </div>
                                    <div className="right">
                                        <span>MAIL Me</span>
                                        <h4>charafelyousfi3@gmail.com</h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-phone"></i>
                                    </div>
                                    <div className="right">
                                        <span>Contact Me</span>
                                        <h4>+212 6 21431215</h4>
                                    </div>
                                </li>

                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-time-zone"></i>
                                    </div>
                                    <div className="right">
                                        <span>Location</span>
                                        <h4>CASABLANCA <br />MOROCCO <br />20570</h4>
                                    </div>
                                </li>
                            </ul>

                            <h3 data-aos="fade-up">Social Info</h3>
                            <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                <li><a className="shadow-box" href="contact.html"><i className="iconoir-github"></i></a></li>
                                <li><a className="shadow-box" href="contact.html"><i className="iconoir-linkedin"></i></a></li>
                              {/*  <li><a className="shadow-box" href="contact.html"><i className="iconoir-instagram"></i></a></li>*/}
                            </ul>
                        </div>

                        <div data-aos="zoom-in" className="contact-form">
                            <div className="shadow-box">
                                <Image src={bg1} alt="BG" className="bg-img" />
                                <Image src={icon3} alt="Icon" />
                                <h1>Let’s work <span>together.</span></h1>
                                <form method="post" onSubmit={handleSubmit}>
                                    <div className="alert alert-success messenger-box-contact__msg" style={{ display: 'none' }} role="alert">
                                        Your message was sent successfully.
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="name" id="name" placeholder="Name *" value={formState.name} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" id="email" placeholder="Email *" value={formState.email} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject *" value={formState.subject} onChange={handleChange} required />
                                    </div>
                                    <div className="input-group">
                                        <textarea name="message" id="message" placeholder="Your Message *" value={formState.message} onChange={handleChange} required></textarea>
                                    </div>
                                    <div className="input-group">
                                        <button className="theme-btn submit-btn" name="submit" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}