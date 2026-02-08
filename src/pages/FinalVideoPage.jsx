import "../styles/finalVideo.css";
import { useState } from "react";

function FinalVideoPage() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="final-container">
      <h1>Just One More Thing ❤️</h1>

      <video
        controls
        
        onEnded={() => setShowQuote(true)}
        className="final-video"
      >
        <source src="/finalvideo.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      {showQuote && (
        <p className="final-quote">
          “This website will be here forever…  
          just like our love ❤️
          Once again wish you a happy birthday!”
        </p>
      )}
    </div>
  );
}

export default FinalVideoPage;
