import { profile } from '../data/portfolio';

type HeroProps = {
  hasResume: boolean;
};

export function Hero({ hasResume }: HeroProps) {
  const handleDownload = () => {
    if (!hasResume) {
      window.alert('Resume PDF not found yet. Add your PDF to public/resume.pdf to enable this button.');
      return;
    }

    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pooja-BD-Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-section section-shell">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <h2>AI &amp; Data Science Student | Exploring Intelligent Technologies</h2>
          <p className="hero-description">{profile.intro}</p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore My Projects
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="secondary-btn">
              Let&apos;s Connect
            </a>
            <button type="button" className="secondary-btn icon-btn" onClick={handleDownload}>
              <span aria-hidden="true">↓</span>
              {hasResume ? 'Download Resume' : 'Resume Pending'}
            </button>
          </div>

          <div className="status-badge" aria-label="Current learning status">
            <span aria-hidden="true">✦</span>
            <span>Currently Learning • Exploring AI • Building Projects</span>
          </div>
        </div>

        <div className="hero-visual reveal" aria-label="Abstract AI visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />

          <div className="profile-card">
            <div className="profile-avatar">PB</div>
            <div>
              <strong>AI Enthusiast</strong>
              <span>Python • AI • Research</span>
            </div>
          </div>

          <div className="tech-tags">
            <span>Python</span>
            <span>GenAI</span>
            <span>SQL</span>
            <span>DSA</span>
          </div>

          <div className="network-graphic" aria-hidden="true">
            <span className="node n1" />
            <span className="node n2" />
            <span className="node n3" />
            <span className="node n4" />
            <span className="node n5" />
            <span className="node n6" />
            <span className="line l1" />
            <span className="line l2" />
            <span className="line l3" />
            <span className="line l4" />
          </div>
        </div>
      </div>
    </section>
  );
}
