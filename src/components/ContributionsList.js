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
          <div className="contribution-link-container">
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
      description: 'Added feature that allows terminal title changes for Windows users running WSL and GitBash, shipped in version 1.83.1.',
      imageUrl: placeholderImg,
    },
    {
      name: 'Superagent',
      link: 'https://github.com/ladjs/superagent',
      description: 'Fixed bug where superagent fails to serialize BigInt primitives and sends error in request body. The failure is now handled internally, shipped in version 8.1.0 with 8M+ weekly downloads.',
      imageUrl: placeholderImg,
    },
    {
        name: "Prefect",
        link: 'https://github.com/PrefectHQ/prefect',
        description: 'Fixed bug that broke deployment of workflows due to arguments being parsed as POSIX on Windows systems.',
        imageUrl: placeholderImg,
      },
      {
        name: 'Aixplora',
        link: 'https://github.com/grumpyp/aixplora',
        description: "Added feature that validates openai api keys before they are saved to the user's profile. Bubbled up error messages to the user so they can take appropriate action.",
        imageUrl: placeholderImg,
      },
      {
        name: 'InstantCoverLetter',
        link: 'https://instantcoverletter.dev',
        description: "Personal project that generates effective cover letters by matching skills in a user's resume with a job description. 50+ active daily users with over 3,000 cover letters generated.",
        imageUrl: placeholderImg,
      },
      {
        name: 'Github Security Advisories',
        link: 'https://github.com/advisories?query=credit%3ANikoRaisanen',
        description: 'Helped Github fine-tune their security advisory database by validating and correcting published advisories.',
        imageUrl: placeholderImg,
      },
      {
        name: 'Offensive Security Writeups',
        link: 'https://github.com/NikoRaisanen/Portswigger-Labs',
        description: 'Published 100+ solutions for the Portswigger Academy pentesting labs spanning topics such as XSS, SSRF, directory traversal, injection attacks, and more!',
        imageUrl: placeholderImg,
      },
      {
        name: 'Engineering Blog Post',
        link: 'https://floqast.com/engineering-blog/post/integrating-siem-with-ci-cd/',
        description: 'Wrote a blog post about integrating SIEM with CI/CD pipelines to automate security monitoring of cloud infrastructure.',
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
