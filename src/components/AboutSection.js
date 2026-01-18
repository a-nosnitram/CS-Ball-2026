import { useEffect, useState, useRef } from "react";
import ProgramItem from "./ProgramItem";
import "./AboutSection.css";

function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrollContainer = document.querySelector(".App");
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = scrollContainer.clientHeight;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      const scrolled =
        (scrollTop - sectionTop) / (sectionHeight - viewportHeight);
      const clamped = Math.max(0, Math.min(1, scrolled));

      // reveal clouds/gradient in the second half of the section to create illusion of 2 sections
      // but it's actually just one big section hahahhahah
      const progress = Math.max(0, (clamped - 0.5) / 0.5);
      setScrollProgress(progress);
      setIsAtEnd(clamped >= 0.98);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const clouds = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 1.png`,
      side: "left",
      top: "2%",
      left: "-5%",
      height: "30rem",
      floatDuration: "6s",
      riseDuration: "0.7s",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 2.png`,
      side: "left",
      top: "40%",
      left: "8%",
      height: "15rem",
      opacity: 0.6,
      floatDuration: "8s",
      riseDuration: "1.1s",
    },
    {
      id: 3,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 3.png`,
      side: "left",
      bottom: "-5%",
      left: "-2%",
      height: "20rem",
      floatDuration: "7s",
      opacity: 0.7,
      riseDuration: "0.9s",
    },
    {
      id: 4,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 4.png`,
      side: "right",
      top: "2%",
      right: "0%",
      height: "15rem",
      opacity: 0.8,
      floatDuration: "9s",
      riseDuration: "1.3s",
    },
    {
      id: 5,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 5.png`,
      side: "right",
      top: "45%",
      right: "3%",
      opacity: 0.6,
      height: "20rem",
      floatDuration: "7.5s",
      riseDuration: "1s",
    },
    {
      id: 6,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 6.png`,
      side: "right",
      bottom: "-5%",
      right: "0%",
      opacity: 0.7,
      height: "25rem",
      floatDuration: "8.5s",
      riseDuration: "1.4s",
    },
  ];

  return (
    <section
      id="about-section"
      className="about-section"
      data-logo-color="burgundy"
      ref={sectionRef}
    >
      <div className="about-snap about-snap--top" aria-hidden="true" />
      <div className="about-snap about-snap--bottom" aria-hidden="true" />
      <div className="about-sticky">
        {/* gradient overlay */}
        <div
          className="gradient-overlay"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 100}%)`,
          }}
        ></div>

        {/* clouds */}
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
                "--rise-offset": `${(1 - scrollProgress) * 80}px`,
                "--slide-offset": `${(1 - scrollProgress) * 100}vh`,
                top: cloud.top,
                bottom: cloud.bottom,
                opacity: cloud.opacity,
                left: cloud.left,
                right: cloud.right,
                height: cloud.height,
                width: "auto",
              }}
            />
          ))}
        </div>

        {/* Fixed content in center */}
        <div className="about-content fixed-content">
          <div className={`about-copy ${isAtEnd ? "is-hidden" : "is-visible"}`}>
            <h2>Info about CS ball</h2>
            <p>
              sdbd edhebdhf hadbsad jfjjfg jsdb dhd qasjfjds ajbdj sjs dasjsd
              asdjsabjd dajldas dsajds djf dhej paa dpw pc apdscmed odfpamw pd
              wpqldnd...
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <div className={`about-copy ${isAtEnd ? "is-visible" : "is-hidden"}`}>
            {/* <h2>Programme</h2> */}
            <div className="program-list">
              <ProgramItem
                align="right"
                time="19:30–20:30"
                description="Dinner service and welcome"
                offsetX="5rem"
              />
              <ProgramItem
                align="left"
                time="20:30–21:15"
                description="Ceilidh and live music."
                offsetX="5rem"
              />
              <ProgramItem
                align="right"
                time="21:15–22:00"
                description="Photographer + DJ."
                offsetX="5rem"
              />
              <ProgramItem
                align="left"
                time="22:00–23:00"
                description="DJ set and dance floor."
                offsetX="5rem"
              />
              <ProgramItem
                align="right"
                time="23:00–23:30"
                description="Afterparty begins."
                offsetX="5rem"
              />
              <ProgramItem
                align="left"
                time="23:30–00:00"
                description="After-afterparty."
                offsetX="5rem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
