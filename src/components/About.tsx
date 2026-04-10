import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I build things end-to-end and ship them. MS CS from FSU. Currently
          embedded at FDLE delivering enterprise systems under real government
          constraints — no playbook, real stakes.
        </p>
        <p className="para">
          On the side: production AI systems. FinOps Sentinel is a LangGraph
          multi-agent RAG pipeline for FinTech compliance — RAGAS faithfulness
          1.0000, live on Render. I also automated my entire job search with an
          8-agent system. Full stack: Python, LangChain, C#, ASP.NET, React.
        </p>
      </div>
    </div>
  );
};

export default About;
