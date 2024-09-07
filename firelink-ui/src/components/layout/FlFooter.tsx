import React from 'react';
import '../../assets/css/footer.css';

const FlFooter: React.FC = () => {
  return (
    <footer className="fl-footer">
      <div className="fl-footer-text">
        <p className="left">Dev Mode</p>
        <p className="center">&copy; 2024 Firelink</p>
        <p className="right">v0.0.0</p>
      </div>
    </footer>
  );
};

export default FlFooter;