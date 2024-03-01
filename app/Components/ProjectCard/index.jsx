
import Image from 'next/image';
import icon from '@/public/images/icon.svg';
import bg1 from '@/public/images/bg1.png';

const ProjectCard = ({image, alt , paragraph , title , link }) => {
    return (
        <>
            <div className="project-item shadow-box">
                <a className="overlay-link" href="/"></a>
                <Image src={bg1} alt="BG" className="bg-img" />
                <div className="project-img">
                    <Image src={image} alt={alt} />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="project-info">
                        <p>{paragraph}</p>
                        <h1>{title}</h1>
                    </div>
                    <a href={link} className="project-btn">
                        <Image src={icon} alt="Button" />
                    </a>
                </div>
            </div>
        </>
    );
};
export default ProjectCard;