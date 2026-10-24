import { skillGroups } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="section-shell alt-bg">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills &amp; Learning Areas</h2>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group reveal">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span>{skill.name}</span>
                    <small>{skill.label}</small>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
