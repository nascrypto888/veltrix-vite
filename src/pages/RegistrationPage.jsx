import React, { useState, useEffect } from "react";
import "../styles/RegistrationPage.css";

const RegistrationPage = () => {
  const [balance, setBalance] = useState({ BUSD: 0, BNB: 0 });

  const hasRequiredBalance = balance.BUSD >= 12 && balance.BNB >= 0.02;

  return (
    <div className="registration-page">
      <div className="registration-layout">
        {/* Form Section */}
        <div className="registration-form-container">
          <h1>Registration in Forsage BUSD</h1>

          <div className="upline-section">
            <label>Your upline</label>
            <input type="text" value="1500000" readOnly />
          </div>

          <ul className="status-list">
            <li className={walletConnected ? "status-success" : "status-error"}>
              <span>{walletConnected ? "✔" : "✖"}</span>
              Wallet: {walletConnected ? "connected" : "not connected"}
            </li>
            <li
              className={
                network === "BSC Testnet" ? "status-success" : "status-error"
              }
            >
              <span>{network === "BSC Testnet" ? "✔" : "✖"}</span>
              Network: {network || "not connected"}
            </li>
            <li className={walletConnected ? "status-success" : "status-error"}>
              <span>{walletConnected ? "✔" : "✖"}</span>
              Registration: {walletConnected ? "available" : "not available"}
            </li>
            <li
              className={hasRequiredBalance ? "status-success" : "status-error"}
            >
              <span>{hasRequiredBalance ? "✔" : "✖"}</span>
              Balance: min 12 BUSD or 0.020 BNB
            </li>
          </ul>

          <div className="approve-section">
            <input type="checkbox" id="approve" />
            <label htmlFor="approve">Approve BUSD</label>
          </div>

          <button className="check-button">Check again</button>
        </div>

        {/* Information Section */}
        <div className="info-container">
          <div className="info-card">
            <div className="info-header">
              <h2>Registration Information</h2>
              <div className="info-divider"></div>
            </div>

            <div className="balance-display">
              <div className="balance-item">
                <span className="balance-label">BUSD Balance:</span>
                <span className="balance-value">
                  {balance.BUSD.toFixed(2)} BUSD
                </span>
              </div>
              <div className="balance-item">
                <span className="balance-label">BNB Balance:</span>
                <span className="balance-value">
                  {balance.BNB.toFixed(3)} BNB
                </span>
              </div>
            </div>

            <p className="info-text">
              {hasRequiredBalance ? (
                <span className="success-text">
                  You have sufficient balance for registration.
                </span>
              ) : (
                <span className="requirement-text">
                  Registration requires <strong>12 BUSD</strong> and at least{" "}
                  <strong>0.005 BNB</strong>. Your wallet balance:{" "}
                  <strong>{balance.BUSD.toFixed(2)} BUSD</strong> and{" "}
                  <strong>{balance.BNB.toFixed(3)} BNB</strong>.
                </span>
              )}
            </p>

            <button className="read-guide-button">
              Read Registration Guide
            </button>
          </div>

          <div className="video-container">
            <h3>What is Forsage BUSD?</h3>
            <div className="video-wrapper">
              <img
                src="https://via.placeholder.com/600x300?text=What+is+Forsage+BUSD"
                alt="What is Forsage BUSD"
              />
            </div>
          </div>

          <div className="support-card">
            <h3>Need Assistance?</h3>
            <p>
              Our support team is available 24/7 to help you with registration
            </p>
            <a href="#" className="support-link">
              Talk to experts in the support chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
