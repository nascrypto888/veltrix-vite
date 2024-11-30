// src/components/ProgramCard.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProgramCard = ({ program, amount, filledLevels, onClick }) => {
    return (
        <div className={`program-card ${program.toLowerCase()}`} onClick={onClick}>
            <div className="program-card-header">
                <h2>{program}</h2>
                <button className="preview-btn" onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}>
                    <FaArrowRight />
                </button>
            </div>
            <div className="program-card-content">
                <div className="level-boxes">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className={`level-box ${filledLevels[index] ? "filled" : ""}`}
                        />
                    ))}
                </div>
                <p className="program-price">{amount}</p>
            </div>
        </div>
    );
};

export default ProgramCard;
