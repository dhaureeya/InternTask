import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import VerificationForm from "./components/Verification/VerificationForm";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import "./App.css";

const App = () => {
  const [showMultiStepForm, setShowMultiStepForm] = useState(false); // State to toggle forms
  
  const cards = [
    {
      flag: "https://flagcdn.com/w320/sg.png",
      title: "Singapore",
      subtitle: "Head Office",
      description: "XYZ Pvt. Ltd.\nRoad to nowhere, 06-404, 500 Internal Error",
    },
    {
      flag: "https://flagcdn.com/w320/hk.png",
      title: "Hong Kong",
      subtitle: "Branches",
      description: "The Infinite Loop Office, 404 Timeout Plaza",
    },
    {
      flag: "https://flagcdn.com/w320/us.png",
      title: "USA",
      subtitle: "Branches",
      description: "Nulltown, Buglandia, 500 0xDEADBEE",
    },
  ];

  return (
    <div className="app-container">
      {/* Left Section (Only show if showMultiStepForm is false) */}
      {!showMultiStepForm && (
        <div className="left-section">
          <h1 className="section-title">Layout Cards</h1>
          <div className="cards-grid">
            {cards.map((card, index) => (
              <Layout
                key={index}
                flag={card.flag}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
              />
            ))}
          </div>
        </div>
      )}

      {/* Right Section */}
      <div className="right-section">
        {showMultiStepForm ? (
          <MultiStepForm /> // Show MultiStepForm after verification
        ) : (
          <VerificationForm onVerify={() => setShowMultiStepForm(true)} /> // Show VerificationForm initially
        )}
      </div>
    </div>
  );
};

export default App;
