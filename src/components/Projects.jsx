function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" />
            </div>
            <div className="project-info">
              <h3>E-commerce Website</h3>
              <p>Fully functional e-commerce platform.</p>
              <a className="btn">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
