export default function Info() {
  return (
    <header className="info-section">
      <div className="image-container">
        <img
          src="../assets/avatar.jpeg"
          alt="Profile picture"
          className="profile-img"
        />
      </div>

      <h1 className="contact-name">Roshan Kareddula</h1>
      <h2 className="job-title">Frontend Developer</h2>
      <p className="website">github.com/rkareddula</p>
      <div className="buttons">
        <a href="mailto:rkareddula@gmail.com" target="_blank">
          <button className="btn">
            <i class="fa-solid fa-envelope"></i>Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/rkareddula" target="_blank">
          <button className="btn btn-secondary">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </button>
        </a>
      </div>
    </header>
  );
}
