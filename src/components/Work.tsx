import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>FinOps Sentinel</h4>
                  <p>Multi-Agent RAG · AI Engineering</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python · LangChain · LangGraph · ChromaDB · FastAPI · Streamlit · GPT-4o-mini · Cohere</p>
              <p style={{marginTop: "0.5rem", fontSize: "0.85em", opacity: 0.75}}>
                Production-grade dual-corpus RAG + LangGraph multi-agent system for FinTech compliance intelligence. Ingests PCI-DSS v4.0.1 (413 chunks), routes queries via a QueryClassifier at 95–100% confidence, applies BM25 + vector hybrid retrieval with Cohere Rerank. RAGAS faithfulness: 1.0000.
              </p>
              <div style={{display: "flex", gap: "1rem", marginTop: "0.75rem"}}>
                <a href="https://github.com/ShreyasKhandare/finops-sentinel" target="_blank" data-cursor="disable" style={{color: "var(--accentColor)", textDecoration: "underline"}}>GitHub ↗</a>
                <a href="https://shreyas-finops-sentinel.streamlit.app/" target="_blank" data-cursor="disable" style={{color: "var(--accentColor)", textDecoration: "underline"}}>Live Demo ↗</a>
              </div>
            </div>
            <WorkImage image="/images/finops-sentinel.webp" alt="FinOps Sentinel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
