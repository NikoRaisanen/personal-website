import React, { useEffect, useState, useRef } from 'react';
import '../css/Contributions.css';

const ContributionCard = ({ repo }) => {
    return (
      <div className="contribution-card">
        <div className="contribution-image-container">
        <i
          className={repo.faIcon}
        />
          <a className="view-contribution" target='_blank' href={repo.contributionLink} rel="noreferrer">
          <div className="contribution-overlay">
            <span>View Contribution</span>
          </div>
          </a>
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
  const repos = [
    {
      name: "VSCode",
      link: 'https://github.com/microsoft/vscode',
      contributionLink: 'https://github.com/microsoft/vscode/pull/193232',
      description: 'Added feature that allows terminal title changes for Windows users running WSL and GitBash, shipped in version 1.83.1.',
      faIcon: "fa fa-github",
    },
    {
      name: 'Superagent',
      link: 'https://github.com/ladjs/superagent',
      contributionLink: 'https://github.com/ladjs/superagent/pull/1773',
      description: 'Fixed bug where superagent fails to serialize BigInt primitives and sends error in request body. The failure is now handled internally, shipped in version 8.1.0 with 8M+ weekly downloads.',
      faIcon: "fa fa-github",
    },
    {
      name: "Prefect",
      link: 'https://github.com/PrefectHQ/prefect',
      contributionLink: 'https://github.com/PrefectHQ/prefect/pull/10719',
      description: 'Fixed bug that broke deployment of workflows due to arguments being parsed as POSIX on Windows systems.',
      faIcon: "fa fa-github",
    },
    {
      name: 'Aixplora',
      link: 'https://github.com/grumpyp/aixplora',
      contributionLink: 'https://github.com/grumpyp/aixplora/pull/126',
      description: "Added feature that validates openai api keys before they are saved to the user's profile. Bubbled up error messages to the user so they can take appropriate action.",
      faIcon: "fa fa-github",
    },
    {
      name: 'Github Security Advisories',
      link: 'https://github.com/advisories?query=credit%3ANikoRaisanen',
      contributionLink: 'https://github.com/github/advisory-database/pull/180',
      description: 'Helped Github fine-tune their security advisory database by validating and correcting published advisories.',
      faIcon: "fa fa-github",
    },
    {
      name: 'Offensive Security Writeups',
      link: 'https://github.com/NikoRaisanen/Portswigger-Labs',
      contributionLink: 'https://github.com/NikoRaisanen/Portswigger-Labs',
      description: 'Published 100+ solutions for the Portswigger Academy pentesting labs spanning topics such as XSS, SSRF, directory traversal, injection attacks, and more!',
      faIcon: "fa fa-github",
    },
    {
      name: 'Engineering Blog Post',
      link: 'https://floqast.com/engineering-blog/post/integrating-siem-with-ci-cd/',
      contributionLink: 'https://floqast.com/engineering-blog/post/integrating-siem-with-ci-cd/',
      description: 'Wrote a blog post about integrating SIEM with CI/CD pipelines to automate security monitoring of cloud infrastructure.',
      faIcon: "fa fa-globe",
    },
    {
      name: 'InstantCoverLetter',
      link: 'https://instantcoverletter.dev',
      contributionLink: 'https://github.com/NikoRaisanen/instant-cover-letter',
      description: "Personal project that generates effective cover letters by matching skills in a user's resume with a job description. 50+ active daily users with over 3,000 cover letters generated.",
      faIcon: "fa fa-globe",
    },
      
  ];

  return (
    <section className={`contributions-section ${isVisible ? 'is-visible' : ''}`} ref={listRef}>
      <h2 className="section-title">Open Source Contributions</h2>
      <div className="contributions-container">
        {repos.map((repo, index) => (
          <ContributionCard key={index} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default ContributionsList;
