function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <form className="contact-form">
          <input className="form-control" placeholder="Name" />
          <input className="form-control" placeholder="Email" />
          <textarea className="form-control" placeholder="Message" />
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
