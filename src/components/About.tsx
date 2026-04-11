import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          CS grad from FSU. I work at FDLE building real government systems —
          tight requirements, no room for errors. It's the kind of work that
          makes you precise.
        </p>
        <p className="para">
          Off the clock, I build AI. FinOps Sentinel is a multi-agent RAG
          system for financial compliance — in production, faithfulness 1.0.
          I also automated my entire job search because that felt like an
          obvious thing to do.
        </p>
      </div>
    </div>
  );
};

export default About;
