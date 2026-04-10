import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Engineer who owns problems end-to-end — from ambiguous requirements
          to production systems — in complex, multi-stakeholder environments.
          MS CS from Florida State University. Currently embedded at FDLE
          (Florida Department of Law Enforcement) delivering enterprise systems
          under real government constraints.
        </p>
        <p className="para">
          Independently built and deployed FinOps Sentinel: a production
          LangGraph multi-agent RAG system for FinTech compliance with RAGAS
          faithfulness 1.0000. Also built a fully autonomous 8-agent Career
          Automation System. Fluent across the stack: Python, LangChain,
          FastAPI, C#, ASP.NET, SQL, React, TypeScript.
        </p>
      </div>
    </div>
  );
};

export default About;
