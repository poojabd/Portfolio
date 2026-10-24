import { profile } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3>{profile.name}</h3>
          <p>Designed with curiosity and a passion for technology.</p>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {profile.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
