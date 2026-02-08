import "./LoadingScreen.css";

function LoadingScreen({ fadeOut }) {
  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1>CS Ball 2026</h1>
        <div className="loading-spinner"></div>
        <p>The 3d object takes time to render lol...</p>
        <p className="loading-subtext">
          If you see this for more than 15 seconds, try refreshing the page.
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
