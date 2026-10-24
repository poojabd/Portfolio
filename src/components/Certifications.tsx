import { certifications } from '../data/portfolio';

export function Certifications() {
  return (
    <section id="certifications" className="section-shell alt-bg">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Credentials</p>
          <h2>Certifications</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.name} className="cert-card reveal">
              <div className="cert-icon" aria-hidden="true">
                ✓
              </div>
              <h3>{cert.name}</h3>
              <p>{cert.issuer}</p>
              <div className="cert-meta">
                <span>{cert.date}</span>
                {cert.credentialLink ? (
                  <a href={cert.credentialLink} target="_blank" rel="noreferrer">
                    Verification <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="disabled-link">Link pending</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
