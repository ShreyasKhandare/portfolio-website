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
                <h4>Systems Project Consultant</h4>
                <h5>FDLE — Florida Department of Law Enforcement</h5>
              </div>
              <h3>Sep 2025 – Present</h3>
            </div>
            <p>
              Embedded with a statewide government agency — no playbook, real
              constraints. Building full-stack enterprise systems using C#,
              ASP.NET, SQL Server, JavaScript, and SharePoint. Designed SQL
              data pipelines and ad-hoc reporting for mission-critical law
              enforcement operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>System Engineer Intern</h4>
                <h5>RRCAT — Dept. of Atomic Energy, Govt. of India</h5>
              </div>
              <h3>Feb 2023 – Jun 2023</h3>
            </div>
            <p>
              Built real-time monitoring and automation systems for critical
              infrastructure using Node.js, MySQL, and RESTful APIs. Achieved
              25% reduction in maintenance costs and 20% improvement in control
              accuracy. Maintained CI/CD pipelines on AWS EC2.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>API Developer Intern</h4>
                <h5>SKITM College</h5>
              </div>
              <h3>Jan 2022 – Jun 2022</h3>
            </div>
            <p>
              Developed and deployed a full-stack real-time web application
              using Python (Django REST Framework), MongoDB, and Vue.js.
              Improved operational efficiency by 60% for 500+ users. Built
              accessible, responsive interfaces and automated testing pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
