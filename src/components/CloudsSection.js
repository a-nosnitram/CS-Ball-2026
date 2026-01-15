import React from "react";
import "./CloudsSection.css";

function CloudsSection() {
  const clouds = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 1.png`,
      side: "left",
      top: "2%",
      left: "-5%",
      height: "30rem",
      floatDuration: "6s",
      riseDuration: "4s",
      riseDelay: "0.5s",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 2.png`,
      side: "left",
      top: "40%",
      left: "8%",
      height: "15rem",
      floatDuration: "8s",
      riseDuration: "5.5s",
      riseDelay: "1s",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 3.png`,
      side: "left",
      bottom: "-5%",
      left: "-2%",
      height: "20rem",
      floatDuration: "7s",
      riseDuration: "4.5s",
      riseDelay: "1.5s",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 4.png`,
      side: "right",
      top: "-2%",
      right: "0%",
      floatDuration: "9s",
      riseDuration: "6s",
      riseDelay: "0.8s",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 5.png`,
      side: "right",
      top: "45%",
      right: "7%",
      height: "20rem",
      floatDuration: "7.5s",
      riseDuration: "5s",
      riseDelay: "1.2s",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 6.png`,
      side: "right",
      bottom: "-5%",
      right: "0%",
      height: "25rem",
      floatDuration: "8.5s",
      riseDuration: "5.5s",
      riseDelay: "1.8s",
    },
  ];

  return (
    <section className="clouds-section">
      <div className="gradient-overlay"></div>
      <div className="clouds-container">
        {clouds.map((cloud) => (
          <img
            key={cloud.id}
            src={cloud.src}
            alt={`Cloud ${cloud.id}`}
            className={`cloud cloud-${cloud.side}`}
            style={{
              "--float-duration": cloud.floatDuration,
              "--rise-duration": cloud.riseDuration,
              "--rise-delay": cloud.riseDelay,
              top: cloud.top,
              bottom: cloud.bottom,
              left: cloud.left,
              right: cloud.right,
              height: cloud.height,
              width: "auto",
            }}
          />
        ))}
      </div>
      <div className="clouds-content">
        <h2>Cloud Section</h2>
        <p>Content goes here...</p>
      </div>
    </section>
  );
}

export default CloudsSection;
