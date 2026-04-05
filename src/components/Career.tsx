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
                <h4>MS Computer Science</h4>
                <h5>Florida State University</h5>
              </div>
              <h3>2021 – 2023</h3>
            </div>
            <p>
              Graduate studies with focus on software systems and applied
              computing. Built foundation in algorithms, distributed systems,
              and machine learning fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer (Independent Projects)</h4>
                <h5>Self-Directed</h5>
              </div>
              <h3>2024 – Present</h3>
            </div>
            <p>
              Designed and deployed FinOps Sentinel — a production LangGraph
              multi-agent RAG system for FinTech compliance intelligence.
              Stack: Python, LangChain, LangGraph, ChromaDB, FastAPI,
              Streamlit, GPT-4o-mini, Cohere Rerank.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems Project Consultant</h4>
                <h5>FDLE — Florida Department of Law Enforcement</h5>
              </div>
              <h3>2023 – Present</h3>
            </div>
            <p>
              Building and maintaining enterprise systems using C#, ASP.NET,
              SQL Server, JavaScript, and SharePoint. Delivering client-facing
              solutions and internal workflow automation across multiple
              concurrent government projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
