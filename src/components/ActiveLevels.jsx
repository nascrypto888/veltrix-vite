// src/components/ActiveLevels.js
import React, { useState } from "react";
import styled from "styled-components";
import LevelDetails from "./LevelDetails";

const LevelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: #fff;
`;

const LevelItem = styled.div`
  background-color: #333;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }
`;

const LevelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const ActiveLevels = () => {
  const [expandedLevel, setExpandedLevel] = useState(null);

  const levels = [
    { level: 1, isActive: true },
    { level: 2, isActive: true },
    { level: 3, isActive: true },
    { level: 4, isActive: true },
    { level: 5, isActive: false },
    { level: 6, isActive: false },
    { level: 7, isActive: false },
    { level: 8, isActive: false },
  ];

  const handleLevelClick = (level) => {
    setExpandedLevel(expandedLevel === level ? null : level);
  };

  return (
    <LevelsContainer>
      <h2>User Active Levels</h2>
      {levels.map(({ level, isActive }) => (
        <LevelItem
          key={level}
          onClick={() => handleLevelClick(level)}
          style={{ opacity: isActive ? 1 : 0.5 }}
        >
          <LevelHeader>
            <span>Level {level}</span>
            <span>{isActive ? "Active" : "Inactive"}</span>
          </LevelHeader>
          {expandedLevel === level && isActive && (
            <LevelDetails level={level} />
          )}
        </LevelItem>
      ))}
    </LevelsContainer>
  );
};

export default ActiveLevels;
