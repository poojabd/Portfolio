import { profile } from '../data/portfolio';

const aboutCards = [
  { label: 'Education', value: 'B.Tech CSE (AI & Data Science)' },
  { label: 'Focus', value: 'AI and emerging technologies' },
  { label: 'Learning', value: 'Python, DSA, and SQL' },
  { label: 'Interests', value: 'Projects, research, and hackathons' },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">About me</p>
          <h2>A Little About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Data Science, and I enjoy learning through building practical projects and exploring new technologies with curiosity.
            </p>
            <p>
              My interests include Artificial Intelligence and emerging AI technologies, Generative AI and Agentic AI, Python and problem-solving, Data Structures and Algorithms, SQL and database fundamentals, and research, innovation, and hackathons. I am motivated by the opportunity to learn, collaborate, experiment, and improve through hands-on experience.
            </p>
          </div>

          <div className="about-card-grid reveal">
            {aboutCards.map((card) => (
              <div key={card.label} className="mini-card">
                <span>{card.label}</span>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
