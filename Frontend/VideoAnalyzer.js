// DeepFakeAnalyzer.js

import React, { useState } from 'react';
import './DeepFakeAnalyzer.css';
import Navbar from './Nav';

const VideoAnalyzer = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const analyzeDeepFake = () => {
    // Perform deep fake analysis using videoFile
    // Example: Replace this logic with your actual analysis
    const fakeConfidence = Math.random() * (97 - 80) + 80; // Range from 80 to 97
    setConfidence(fakeConfidence);
  };

  return (
    <>
        <Navbar/>
    <div className="container">
      <div className="header">
        <h1>Deep Fake Video Analyzer</h1>
      </div>

      <div className="upload-section">
        <label className="label">Upload Video:</label>
        <input type="file" accept="video/*" className="file-input" onChange={handleVideoUpload} />

        <center>
          <button className="analyze-button" onClick={analyzeDeepFake}>
            Analyze
          </button></center>
      </div>

      <div className="result-section">
          <div className="result-label">
            <h2>Result</h2>
          </div>
          {confidence !== null && (
            <p className="result"><span style={{marginRight :"20px",fontWeight:"500"}}>Confidence Percentage : </span>{` ${confidence.toFixed(2)}%         `}<span style={{color:"green", marginLeft :"20px", fontWeight:"500"}}>Real</span></p>
          )}
        </div>
    </div></>
  );
};

export default VideoAnalyzer;
