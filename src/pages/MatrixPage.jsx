// src/pages/MatrixPage.jsx

import React, { useState } from "react";
import LevelDetails from "../components/LevelDetails";
import "../styles/MatrixPage.css";
import ProgramCard from '../components/ProgramCard';
import { FaArrowLeft } from 'react-icons/fa';

const MatrixPage = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);

    // Generate random filled levels for each program
    const generateRandomFilledLevels = (totalLevels) => {
        return Array.from({ length: totalLevels }, () => Math.random() > 0.5);
    };

    // Dummy data for programs X2 and X3 with random filled levels
    const programs = [
        { 
            id: "v3", 
            name: "Veltrix X3", 
            price: "140 BUSD",
            filledLevels: generateRandomFilledLevels(8)
        },
        { 
            id: "v4", 
            name: "Veltrix X4", 
            price: "230 BUSD",
            filledLevels: generateRandomFilledLevels(8)
        },
    ];

    // Dummy levels data
    const levels = [
        { level: 1, partners: 25, cycles: 12, entryFee: 5, totalSlots: 3, filledSlots: 2 },
        { level: 2, partners: 8, cycles: 3, entryFee: 10, totalSlots: 3, filledSlots: 3 },
        { level: 3, partners: 1, cycles: 0, entryFee: 20, totalSlots: 3, filledSlots: 1 },
        { level: 4, partners: 10, cycles: 5, entryFee: 40, totalSlots: 3, filledSlots: 0 },
        { level: 5, partners: 5, cycles: 2, entryFee: 80, totalSlots: 3, filledSlots: 1 },
        { level: 6, partners: 15, cycles: 8, entryFee: 160, totalSlots: 3, filledSlots: 2 },
        { level: 7, partners: 20, cycles: 10, entryFee: 320, totalSlots: 3, filledSlots: 2 },
        { level: 8, partners: 18, cycles: 7, entryFee: 640, totalSlots: 3, filledSlots: 3 },
    ];

    return (
        <div className={`matrix-page ${!selectedProgram ? 'programs-view' : ''}`}>
            {!selectedProgram ? (
                <div className="programs-section">
                    <h1>Forsage Programs</h1>
                    <div className="programs-container">
                        {programs.map((program) => (
                            <ProgramCard
                                key={program.id}
                                program={program.name}
                                amount={program.price}
                                filledLevels={program.filledLevels}
                                onClick={() => setSelectedProgram(program)}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="level-details-container">
                    <button 
                        className="back-button"
                        onClick={() => setSelectedProgram(null)}
                    >
                        <FaArrowLeft /> Back to Programs
                    </button>
                    <LevelDetails 
                        program={selectedProgram} 
                        levels={levels}
                    />
                </div>
            )}
        </div>
    );
};

export default MatrixPage;
