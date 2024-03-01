import Image from "next/image";
import star2 from '@/public/images/star-2.png';
import ProjectCard from '../Components/ProjectCard';
import project from '@/public/images/project2.jpeg';

export default function Works() {
    return (
        <>
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up">
                        <Image src={star2} alt="Star" />
                        All Projects
                        <Image src={star2} alt="Star" />
                    </h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in">
                                <ProjectCard image={project} alt="test1" paragraph="test" title="Test1" link ="/" />
                            </div>

                            <div data-aos="zoom-in">
                                <ProjectCard image={project} alt="test" paragraph="test2" title="Test2" link="test" />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading" data-aos="fade-up">
                                <Image src={star2} alt="Star" />
                                All Projects
                                <Image src={star2} alt="Star" />
                            </h1>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <ProjectCard image={project} alt="test" paragraph="test3" title="Test3" link="test" />
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <ProjectCard image={project} alt="test" paragraph="test4" title="Test4" link="test" />
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <ProjectCard image={project} alt="test" paragraph="test5" title="Test5" link="test" />
                                </div>

                                <div data-aos="zoom-in" className="flex-1">
                                    <ProjectCard image={project} alt="test" paragraph="test6" title="Test6" link="test" />

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};