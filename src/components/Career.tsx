import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h5>
              </div>
              <h3>2019 – 2023</h3>
            </div>
            <p>
              Bachelor's degree in Computer Science from RGPV, Bhopal, India.
              Built strong foundations in data structures, algorithms, databases,
              and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.S. in Computer Science</h4>
                <h5>Florida State University — Tallahassee, FL</h5>
              </div>
              <h3>2023 – 2025</h3>
            </div>
            <p>
              Graduate studies in software systems and applied computing at FSU.
              Deepened expertise in distributed systems, machine learning, and
              AI engineering. Built and shipped production AI systems
              independently alongside coursework.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems Project Consultant</h4>
                <h5>FDLE — Florida Department of Law Enforcement</h5>
              </div>
              <h3>Sep 2025 – Present</h3>
            </div>
            <p>
              Embedded with a statewide government agency delivering full-stack
              enterprise systems end-to-end — no playbook, real constraints.
              C#, ASP.NET, SQL Server, JavaScript, SharePoint. Designed SQL
              data pipelines and ad-hoc reporting for mission-critical law
              enforcement operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
