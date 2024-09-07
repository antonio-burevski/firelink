import React from 'react';
import '../../assets/css/content.css'
import hub_video from '../../assets/media/firelink_hub_video.mp4'

const FlContent: React.FC = () => {

  return (
    <main>
      <div className="image-container">
        <video
          className="animated-video"
          src={hub_video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="buttons-overlay">
          <button className="icon-button">
            <span className="icon">🔍</span>
            <span className="text">Dashboard</span>
          </button>
          <button className="icon-button">
            <span className="icon">📂</span>
            <span className="text">Watcher</span>
          </button>
          <button className="icon-button">
            <span className="icon">⚙️</span>
            <span className="text">Organizor</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default FlContent;
