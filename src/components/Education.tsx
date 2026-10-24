import { education } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="section-shell alt-bg">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Academic path</p>
          <h2>Education</h2>
        </div>

        <div className="education-card reveal">
          {education.map((item) => (
            <div key={item.degree} className="education-row">
              <div>
                <p className="education-period">{item.period}</p>
              </div>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
