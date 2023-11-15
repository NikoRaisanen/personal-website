import React from 'react';
import '../css/Contributions.css';
import placeholderImg from '../images/whiteFQ.png';
const ContributionCard = ({ repo }) => {
    return (
      <div className="contribution-card">
        <div className="contribution-image-container">
          <img src={repo.imageUrl} alt={repo.name} className="contribution-image" />
          <div className="contribution-overlay">
            <span>View Contribution</span>
          </div>
        </div>
        <div className="contribution-info">
          <h3 className="contribution-title">{repo.name}</h3>
          <p className="contribution-description">{repo.description}</p>
          <div className="contribution-link-container"> {/* Container for the link */}
            <a href={repo.link} target="_blank" rel="noopener noreferrer" className="contribution-link">
              {repo.link}
            </a>
          </div>
        </div>
      </div>
    );
  };

const ContributionsList = () => {
  const repos = [
    {
      name: "VSCode",
      link: 'https://github.com/microsoft/vscode',
      description: 'TBD',
      imageUrl: placeholderImg,
    },
    {
      name: 'Superagent',
      link: 'https://github.com/ladjs/superagent',
      description: 'TBD',
      imageUrl: placeholderImg,
    },
  ];

  return (
    <section className="contributions-section">
      <h2>Open Source Contributions</h2>
      <div className="contributions-container">
        {repos.map((repo, index) => (
          <ContributionCard key={index} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default ContributionsList;
