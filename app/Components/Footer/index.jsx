import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';

const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-content text-center">
                        <Link href="/" className="logo">
                            <Image src={logo} alt="Logo" />
                        </Link>
                        <ul className="footer-menu">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/About">About</Link></li>
                            <li><Link href="/Works">Works</Link></li>
                            <li><Link href="/Contact">Contact</Link></li>
                        </ul>
                        <p className="copyright">
                            &copy; All rights reserved by <span><a href="https://bennis-yahya.vercel.app/" target='_blank'>Bennis Yahya</a></span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;