import { activities } from '../data/portfolio';

export function Activities() {
  return (
    <section id="activities" className="section-shell">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Learning journey</p>
          <h2>Experience &amp; Activities</h2>
        </div>

        <div className="timeline">
          {activities.map((item) => (
            <article key={item.title} className="timeline-item reveal">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.organization}</p>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p>{item.description}</p>
                <div className="tech-stack">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <span aria-hidden="true">↗</span>
                    Proof / link
                  </a>
                ) : (
                  <span className="disabled-link subtle">
                    <span aria-hidden="true">•</span>
                    Proof pending
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
