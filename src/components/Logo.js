import { useEffect, useState } from "react";
import "./Logo.css";

function Logo() {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState("burgundy");

  useEffect(() => {
    const scrollContainer = document.querySelector(".App");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;

      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = scrollContainer.clientHeight;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

      // do not show in hero section
      setIsVisible(scrollTop > heroBottom - 100);

      // sections with logo-color data attribute
      const sections = document.querySelectorAll("[data-logo-color]");
      let newColor = "burgundy"; // default

      // which section is currently in view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // check if section is in viewport
        if (
          sectionTop < viewportHeight * 0.6 &&
          sectionBottom > viewportHeight * 0.4
        ) {
          newColor = section.getAttribute("data-logo-color") || "burgundy";
        }
      });

      setColor(newColor);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`logo-container ${isVisible ? "visible" : ""}`}>
      <svg
        className="logo-svg"
        viewBox="0 0 440 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: `var(--color-${color})` }}
      >
        <path d="M220.455 118.885C222.329 118.885 224.122 118.132 225.434 116.795C233.507 108.569 248.56 90.4091 248.56 69.3278C248.56 49.2664 234.93 19.8174 226.654 3.78316C225.456 1.46318 223.069 0.00213194 220.458 5.83856e-07C217.847 -0.0010651 215.454 1.45679 214.256 3.77677C205.98 19.8099 192.347 49.2643 192.347 69.3278C192.347 90.4112 207.4 108.574 215.474 116.797C216.786 118.134 218.583 118.885 220.455 118.885Z" />
        <path d="M211.291 142.594C209.697 130.75 205.509 115.971 194.993 105.454C180.808 91.2681 150.346 80.0827 133.155 74.5966C130.667 73.8026 127.947 74.457 126.099 76.3027C124.252 78.1485 123.59 80.8713 124.384 83.3586C129.869 100.548 141.056 131.015 155.243 145.202C163.429 153.388 174.198 157.736 184.156 160.016C190.644 151.239 200.232 144.886 211.291 142.594Z" />
        <path d="M256.525 159.709C266.546 157.444 277.417 153.09 285.664 144.844C299.852 130.657 311.038 100.19 316.523 83.0004C317.317 80.5131 316.655 77.7903 314.808 75.9446C312.962 74.0988 310.24 73.4445 307.753 74.2384C290.562 79.7235 260.101 90.9099 245.915 105.095C235.296 115.715 231.129 130.683 229.57 142.584C240.52 144.84 250.032 151.077 256.525 159.709Z" />
        <path d="M381.282 214.829C380.376 211.389 377.02 209.188 373.502 209.715C337.614 215.099 299.738 186.234 265.37 190.887C263.284 213.839 243.941 231.885 220.453 231.885C196.965 231.885 177.622 213.839 175.536 190.887C141.17 186.234 103.293 215.099 67.4054 209.715C63.8876 209.188 60.5307 211.389 59.6249 214.829C51.482 245.736 90.9623 294.857 129.784 303C157.934 308.903 200.304 295.632 220.454 275.123C240.605 295.632 282.975 308.903 311.125 303C349.945 294.857 389.426 245.736 381.282 214.829ZM188.132 259.386C187.402 261.275 185.939 262.787 184.076 263.583C175.854 267.095 160.807 272.258 147.162 270.183C122.766 266.474 115.627 250.09 113.539 240.817C112.7 237.096 114.786 233.332 118.389 232.08C125.437 229.631 138.121 226.372 151.382 228.566C174.664 232.42 184.187 245.33 187.955 253.552C188.798 255.392 188.862 257.496 188.132 259.386ZM327.368 240.816C325.28 250.089 318.14 266.473 293.745 270.182C280.1 272.257 265.053 267.094 256.831 263.582C254.968 262.787 253.505 261.274 252.775 259.384C252.045 257.495 252.109 255.391 252.953 253.551C256.721 245.329 266.245 232.418 289.526 228.565C302.786 226.371 315.471 229.63 322.52 232.079C326.122 233.331 328.207 237.095 327.368 240.816Z" />
        <path d="M220.453 210.571C233.597 210.571 244.253 199.915 244.253 186.771C244.253 173.627 233.597 162.971 220.453 162.971C207.309 162.971 196.653 173.627 196.653 186.771C196.653 199.915 207.309 210.571 220.453 210.571Z" />
        <path d="M0 101H43.6155V122.126H20.5496V299.874H43.6155V321H0V101Z" />
        <path d="M440 321H396.594V299.874H419.66V121.883H396.594V101H440V321Z" />
      </svg>
      <div className="logo-text" style={{ color: `var(--color-${color})` }}>
        Subnet Mask [array] de - CS ball 2026
      </div>
    </div>
  );
}

export default Logo;
