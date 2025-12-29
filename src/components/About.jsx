function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Crafting Digital Experiences</h3>
            <p>Hello! I'm Rudra, a web developer passionate about building user-friendly applications.</p>
            <p>I enjoy working with modern web technologies and improving my skills every day.</p>

            <div className="skills">
              {["HTML","CSS","JavaScript","React","Node.js","Git"].map(skill => (
                <span key={skill} className="skill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="about-image">
            <img src="https://via.placeholder.com/400" alt="Rudra" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
