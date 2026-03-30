import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm an AI/LLM Engineer with a background in systems and backend
          engineering. I build production-grade AI systems — RAG pipelines,
          multi-agent orchestration, and LLM-powered APIs — with a focus on
          FinTech and regulatory compliance use cases.
        </p>
        <p className="para">
          I hold an MS in Computer Science from Florida State University and
          currently work as a Systems Project Consultant at FDLE (Florida
          Department of Law Enforcement) while actively building and deploying
          AI engineering projects. My flagship project, FinOps Sentinel, is a
          dual-corpus RAG + LangGraph multi-agent system for real-time
          compliance intelligence — deployed on Render and Streamlit Cloud.
        </p>
      </div>
    </div>
  );
};

export default About;
