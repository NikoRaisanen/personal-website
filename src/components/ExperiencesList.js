import React from 'react';
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

const ExperienceList = () => {
    return (
        <div className="experience-list">
            {experiences.map(experience => (
                <Experience key={experience.id} {...experience} />
            ))}
        </div>
    );
};

export default ExperienceList;
