import type { Metadata } from 'next';
import Script from 'next/script';
import '/public/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '/public/css/style.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

export const metadata: Metadata= {
    title: '',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
            </head>
            <body>
                <main className="main-homepage">
                    <Header />
                    {children}
                    <Footer />
                </main>

                <Script src="/js/jquery-3.6.4.js" />
                <Script src="/js/bootstrap.bundle.min.js" />
            </body>
        </html>
    )
}