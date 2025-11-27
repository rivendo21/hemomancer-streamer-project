import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroScreen.css";

const IntroScreen = () => {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  // Audio MUST be loaded from public folder
  const typeSound = new Audio("/keysound.wav");

  const fullText = "  Can you hear me ? Can you hear it ?";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= fullText.length) {
        clearInterval(interval);

        setTimeout(() => setFadeOut(true), 1000);
        setTimeout(() => navigate("/home"), 2500);
      } else {
        setText((prev) => prev + fullText[i]);

        // Play sound
        typeSound.currentTime = 0;
        typeSound.volume = 0.2;

        typeSound.play().catch(() => {}); // prevents errors if blocked

        i++;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : ""}`}>
      <span className="intro-text">{text}</span>
    </div>
  );
};

export default IntroScreen;
