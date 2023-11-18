import React from 'react';
import '../css/experience.css';

const experiences = [
    {
        id: 1,
        title: "Penetration Tester",
        description: "Conducted vulnerability assessments and security audits.",
        year: "2018-2019",
    },
    {
        id: 2,
        title: "Security Engineer",
        description: "Developed and maintained company-wide security protocols.",
        year: "2020",
    },
    {
        id: 3,
        title: "Software Engineer",
        description: "Designed and implemented software solutions with a focus on security.",
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
