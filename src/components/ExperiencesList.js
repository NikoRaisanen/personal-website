import React, { useEffect, useState, useRef } from 'react';
import '../css/experience.css';

const experiences = [
    {
        id: 1,
        title: "Security Engineering",
        description: "I got started with Hack The Box and dove into the world of offensive security. Shortly after I earned a top 3% rank in the 2021 National Cyber League CTF competition. I then started work as an Application Security Engineer, building security automation tooling with Python and threat modeling services in the fintech space.",
        year: "2019-2021",
    },
    {
        id: 2,
        title: "Software Engineering",
        description: "Working at a tech startup, I was able to quickly gain knowledge in a wide range of domains from infrastructure, to systems design, to frontend development. With an abundance of autonomy and responsibility, I tackled greenfield projects and optimized existing services to better align with our microservice architecture.",
        year: "2021-Present",
    },
];

const Experience = ({ title, description, year }) => {
    return (
        <div className="experience-card">
            <h3 className="experience-title">{title}</h3>
            <p className="experience-description">{description}</p>
            <span className="experience-year">{year}</span>
        </div>
    );
};

const LinkedInCard = () => {
    return (
    <div className="experience-card linkedin-card">

      <a style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/niko-raisanen/" target="_blank" rel="noopener noreferrer">
        <h3 className="experience-title">Check out my work history on Linkedin</h3>
    </a>
        <p className="experience-description">or <a style={{textDecoration: 'none', color: '#9DA5A6'}}target="_blank" rel="noopener noreferrer" href='https://niko-public.s3.amazonaws.com/NikoResumeNov2023.pdf'>download my resume</a></p>
    </div>
    );
  };

  const ExperienceList = () => {
    const [isVisible, setIsVisible] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setIsVisible(entries[0].isIntersecting)
            },
            { threshold: 0.2 }
        );

        if (listRef.current) {
            observer.observe(listRef.current);
        }

        return () => {
            if (listRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className={`path-section ${isVisible ? 'is-visible' : ''}`} ref={listRef}>
            <h2 className="section-title">My Path</h2>
            <div className="experience-list">
                {experiences.map(experience => (
                    <Experience key={experience.id} {...experience} />
                ))}
                <LinkedInCard />
            </div>
        </section>
    );
};

export default ExperienceList;
