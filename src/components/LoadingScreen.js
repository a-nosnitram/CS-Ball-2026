import "./LoadingScreen.css";

function LoadingScreen({ fadeOut }) {
  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1>maskARRAYde</h1>
        <div className="loading-spinner"></div>
        <p>The 3d object takes time to render lol...</p>
        <p className="loading-subtext">
          will have to come up with a better loading screen message
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
