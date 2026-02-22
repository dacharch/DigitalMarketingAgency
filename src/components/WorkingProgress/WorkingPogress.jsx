import React from "react";
import "./WorkingProgress.css";

const steps = [
  { id: 1, title: "Research Project", image: "/images/process1.png" },
  { id: 2, title: "Find Ideas", image: "/images/process2.png" },
  { id: 3, title: "Start Optimize", image: "/images/process3.png" },
  { id: 4, title: "Reach Target", image: "/images/process4.png" },
];

const WorkingProcess = () => {
  return (
    <section id="process" className="working-process">
      <div className="container">

        <div className="section-heading">
          <small>Easy Steps</small>
          <h2>
            Our Working <span>Process</span>
          </h2>
          <div className="animate-border"></div>
        </div>

        {/* Process Wrapper */}
        <div className="process-wrapper">
          
          {/* Background Line Image */}
         

          <div className="process-grid">
            {steps.map((step, index) => (
              <div className="process-card" key={step.id}>
                <div className="process-icon">
                  <img src={step.image} alt={step.title} />
                </div>
                <p>{`0${index + 1}. ${step.title}`}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="process-cta">
          <button className="primary-btn">Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;