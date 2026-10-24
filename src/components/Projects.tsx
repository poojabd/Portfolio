import { useMemo, useState } from 'react';
import { projects } from '../data/portfolio';

type Filter = 'All' | 'AI' | 'Web' | 'Other';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
        </div>

        <div className="filter-bar reveal" aria-label="Project filters">
          {(['All', 'AI', 'Web', 'Other'] as const).map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <div className="empty-state reveal">
            <span aria-hidden="true">✦</span>
            <p>No projects in this category yet. Add your next idea here.</p>
          </div>
        ) : (
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article key={project.id} className="project-card reveal">
                <div className={`project-visual visual-${project.accent}`}>
                  <span aria-hidden="true" className="project-icon">▣</span>
                </div>
                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="project-tag">{project.category}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.repo ? (
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        GitHub <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="disabled-link">GitHub link pending</span>
                    )}
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="disabled-link">Demo pending</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
