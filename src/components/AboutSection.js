import { useEffect, useRef, useState } from "react";
import ProgramItem from "./ProgramItem";
import "./AboutSection.css";

function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
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
    };
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scheduleRevealAt = 0.15;
  const showSchedule = scrollProgress >= scheduleRevealAt;

  const clouds = [
    {
      id: 1,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 1.png`,
      side: "left",
      top: "2%",
      left: "-5%",
      height: "20rem",
      floatDuration: "6s",
      riseDuration: "0.7s",
    },
    {
      id: 2,
      src: `${process.env.PUBLIC_URL}/clouds/cloud 2.png`,
      side: "left",
      top: "40%",
      left: "8%",
      height: "10rem",
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
      height: "15rem",
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
      height: "13rem",
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
      height: "12rem",
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
      height: "20rem",
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
        ></div>{" "}
        {/* Fixed content in center */}
        <div className="about-content fixed-content">
          <div
            className={`about-copy ${showSchedule ? "is-hidden" : "is-visible"}`}
          >
            <h2>Info about CS ball</h2>
            <p>
              Hey there, stranger. Are you ready for a night of intrigue you
              won’t soon forget? Join us for an evening of fine dining, dancing,
              and wine at this year’s CS Ball!
            </p>
            <p>
              Dress to impress and step into the mystery-- whether masked or
              unmasked. All you need is to bring your finest self. Guests
              attending will enjoy a full evening of entertainment, music, and
              atmosphere. Allow us to dazzle you. It’s a night you won’t want to
              miss.
            </p>
          </div>
          <div
            className={`about-copy ${showSchedule ? "is-visible" : "is-hidden"}`}
          >
            <div className="program-list">
              <ProgramItem
                align="right"
                time="18:30–19:00"
                description="Dinner reception"
                offsetX="5rem"
              />
              <ProgramItem
                align="left"
                time="19:00–21:30"
                description="Dinner"
                offsetX="5rem"
              />
              <ProgramItem
                align="right"
                time="21:30–00:00"
                description="Afterparty"
                offsetX="5rem"
              />
              <ProgramItem
                align="left"
                time="21:30–22:30"
                description="Ceilidh & games"
                offsetX="5rem"
              />
              <ProgramItem
                align="right"
                time="22:30–00:00"
                description="DJ set"
                offsetX="5rem"
              />
            </div>
          </div>
        </div>
      </div>

      {/* clouds */}
      <div
        className="clouds-container"
        style={{
          // transform: `translateY(${-cloudsExitProgress * 100}vh)`,
          // opacity: 1 - cloudsExitProgress,
          transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
        }}
      >
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
    </section>
  );
}

export default AboutSection;
