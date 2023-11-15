import React from 'react';
import '../css/Contributions.css';
import whiteFQ from '../images/whiteFQ.png';
import whiteFolder from '../images/whiteFolder.png';

// Individual Contribution component
const Contribution = ({ title, link, description, imageUrl }) => {
  return (
    <div className="contribution">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="contribution-image" />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="contribution-link">
        {link}
      </a>
    </div>
  );
};

// Contributions list component
const ContributionsList = () => {
  const contributions = [
    {
      title: 'Open Source Contribution 1',
      link: 'https://github.com/user/repo1',
      description: 'This is a description of the open source contribution...',
      imageUrl: whiteFQ,
    },
    {
      title: 'Open Source Contribution 2',
      link: 'https://github.com/user/repo2',
      description: 'This is another description of the open source contribution...',
      imageUrl: whiteFolder,
    },
    // ...add more contributions as needed
  ];

  return (
    <section className="contributions">
      <h2>Open Source Contributions</h2>
      {contributions.map((contribution, index) => (
        <Contribution
          key={index}
          title={contribution.title}
          link={contribution.link}
          description={contribution.description}
          imageUrl={contribution.imageUrl}
        />
      ))}
    </section>
  );
};

export default ContributionsList;