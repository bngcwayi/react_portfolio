import React from "react";
import "./Resume.css";
import BabalwaNgcwayiCV from "../documents/BabalwaNgcwayiCV.pdf";
import Navbar from "../components/Navbar";

const Resume = () => {
  const openInNewTab = () => {
    const newWindow = window.open(
      BabalwaNgcwayiCV,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="ResumeButton">
      <div className="AdjustNav">
        <Navbar />
      </div>

      <button onClick={openInNewTab} className="ResumePage">
        Download Resume
      </button>
    </div>
  );
};

export default Resume;
