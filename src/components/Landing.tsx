import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <p className="landing-greeting">Hello! I'm</p>
            <h1>
              SHREYAS
              <br />
              <span>KHANDARE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Forward Deployed Engineer</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI Systems</div>
              <div className="landing-h2-2">End-to-End Delivery</div>
            </h2>
            <h2>
              <div className="landing-h2-info">End-to-End Delivery</div>
              <div className="landing-h2-info-1">AI Systems</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
