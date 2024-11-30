// src/components/LevelDetails.jsx

import React, { useState } from "react";
import { FaUserFriends, FaRedo, FaCoins, FaArrowUp } from "react-icons/fa"; // Import icons from react-icons
import "../styles/LevelDetails.css";
import LevelModal from "./LevelModal";

const LevelDetails = ({ program, levels }) => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const isX4Program = program.name.toLowerCase().includes("x4");

  const renderSlots = (totalSlots, filledSlots) => {
    if (isX4Program) {
      // X4 Multi-line Layout
      return (
        <div className="slots-container x4-slots">
          <div className="slot parent">Me</div>
          {/* First line with 2 slots */}
          <div className="first-line-slots">
            <div
              className={`slot first-line ${filledSlots > 1 ? "filled" : ""}`}
            >
              <FaArrowUp className="arrow-icon" />
            </div>
            <div
              className={`slot first-line ${filledSlots > 2 ? "filled" : ""}`}
            >
              <FaArrowUp className="arrow-icon" />
            </div>
          </div>
          {/* Second line with 4 slots */}
          <div className="second-line-slots">
            <div
              className={`slot second-line ${filledSlots > 3 ? "filled" : ""}`}
            />
            <div
              className={`slot second-line ${filledSlots > 4 ? "filled" : ""}`}
            />
            <div
              className={`slot second-line ${filledSlots > 5 ? "filled" : ""}`}
            />
            <div
              className={`slot second-line ${filledSlots > 6 ? "filled" : ""}`}
            />
          </div>
        </div>
      );
    } else {
      // X3 Tree Layout
      return (
        <div className="slots-container x3-slots">
          <div className="slot parent">Me</div>
          <div className="child-slots">
            <div className={`slot child ${filledSlots > 1 ? "filled" : ""}`} />
            <div className={`slot child ${filledSlots > 2 ? "filled" : ""}`} />
            <div className={`slot child ${filledSlots > 3 ? "filled" : ""}`} />
          </div>
        </div>
      );
    }
  };

  const handleLevelClick = (level) => {
    if (level.filledSlots > 0) {
      setSelectedLevel(level);
    }
  };

  return (
    <div className="level-details">
      <h1>{program.name}</h1>
      <h3>
        Active Levels ({levels.filter((l) => l.filledSlots > 0).length} out of
        8)
      </h3>
      <div className="levels-grid">
        {levels.map((level) => {
          const isActive = level.filledSlots > 0;
          return (
            <div
              key={level.level}
              className={`level-card ${isActive ? "active" : "inactive"}`}
              onClick={() => handleLevelClick(level)}
              style={{ cursor: isActive ? "pointer" : "default" }}
            >
              <div className="level-card-header">
                <div className="level-number">Level {level.level}</div>
                <div className="entry-fee">
                  <FaCoins className="icon" />
                  <span>{level.entryFee} BUSD</span>
                </div>
              </div>

              {renderSlots(level.totalSlots, level.filledSlots)}

              {isActive && (
                <div className="level-stats">
                  <div className="stat-item">
                    <FaUserFriends className="icon" title="Partners" />
                    <span>{level.partners}</span>
                  </div>
                  <div className="stat-item">
                    <FaRedo className="icon" title="Cycles" />
                    <span>{level.cycles}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedLevel && (
        <LevelModal
          level={selectedLevel}
          program={program}
          onClose={() => setSelectedLevel(null)}
        />
      )}
    </div>
  );
};

export default LevelDetails;
