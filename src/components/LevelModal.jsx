import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaUserFriends, FaWallet } from 'react-icons/fa';

const LevelModal = ({ level, program, onClose }) => {
    const [currentCycle, setCurrentCycle] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    
    const isX4Program = program.name.toLowerCase().includes('x4');
    const minSwipeDistance = 50;

    // Dummy data for slots with user IDs
    const cyclesData = Array(level.cycles).fill().map((_, index) => ({
        slots: isX4Program ? [
            { id: 'Me' }, // parent always shows "Me"
            { id: `${4000 + (index * 2)}` }, { id: `${4001 + (index * 2)}` }, // first line
            { id: `${4002 + (index * 2)}` }, { id: `${4003 + (index * 2)}` }, 
            { id: `${4004 + (index * 2)}` }, { id: `${4005 + (index * 2)}` } // second line
        ] : [
            { id: 'Me' }, // parent
            { id: `${4000 + (index * 3)}` }, 
            { id: `${4001 + (index * 3)}` }, 
            { id: `${4002 + (index * 3)}` } // children
        ]
    }));

    const handlePrevCycle = () => {
        setCurrentCycle((prev) => (prev > 0 ? prev - 1 : level.cycles - 1));
    };

    const handleNextCycle = () => {
        setCurrentCycle((prev) => (prev < level.cycles - 1 ? prev + 1 : 0));
    };

    // Touch event handlers for swipe functionality
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNextCycle();
        }
        if (isRightSwipe) {
            handlePrevCycle();
        }
    };

    return (
        <div className="level-modal-overlay" onClick={onClose}>
            <div 
                className="level-modal-content" 
                onClick={e => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <button className="modal-close-btn" onClick={onClose}>
                    <FaTimes />
                </button>
                
                <div className="modal-header">
                    <h2 className="modal-title">Level {level.level}</h2>
                    <div className="cycle-indicator">
                        Cycle {currentCycle + 1} of {level.cycles}
                    </div>
                </div>

                <button className="cycle-nav-btn prev" onClick={handlePrevCycle}>
                    <FaArrowLeft />
                </button>
                
                <div className="modal-slots-container">
                    {isX4Program ? (
                        <div className="slots-container x4-slots">
                            <div className="slot parent">
                                {cyclesData[currentCycle].slots[0].id}
                            </div>
                            <div className="first-line-slots">
                                <div className="slot first-line filled">
                                    {cyclesData[currentCycle].slots[1].id}
                                </div>
                                <div className="slot first-line filled">
                                    {cyclesData[currentCycle].slots[2].id}
                                </div>
                            </div>
                            <div className="second-line-slots">
                                {cyclesData[currentCycle].slots.slice(3).map((slot, idx) => (
                                    <div key={idx} className="slot second-line filled">
                                        {slot.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="slots-container x3-slots">
                            <div className="slot parent">
                                {cyclesData[currentCycle].slots[0].id}
                            </div>
                            <div className="child-slots">
                                {cyclesData[currentCycle].slots.slice(1).map((slot, idx) => (
                                    <div key={idx} className="slot child filled">
                                        {slot.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button className="cycle-nav-btn next" onClick={handleNextCycle}>
                    <FaArrowRight />
                </button>

                <div className="modal-footer">
                    <div className="stat-column">
                        <div className="stat-label">Partners</div>
                        <div className="stat-value">
                            <FaUserFriends className="icon" />
                            <span>{level.partners}</span>
                        </div>
                    </div>
                    <div className="stat-column">
                        <div className="stat-label">Total Level Revenue</div>
                        <div className="stat-value">
                            <FaWallet className="icon" />
                            <span>{level.entryFee * level.partners} BUSD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelModal; 