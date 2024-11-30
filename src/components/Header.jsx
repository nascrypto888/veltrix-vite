// src/components/Header.js
import React from "react";
import { useAppKit, createAppKit } from "@reown/appkit/react";
import { metadata, PROJECT_ID, networks, ethersAdapter } from "../config";
import styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";

createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  PROJECT_ID,
  features: {
    analytics: true,
  },
});

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background: linear-gradient(145deg, #1a1a1a, #222);
  color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #06bcee;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.8rem;
  }

  span {
    background: linear-gradient(45deg, #06bcee, #0099ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const WalletButton = styled.button`
  background: linear-gradient(145deg, #06bcee, #0099ff);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(6, 188, 238, 0.2);

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(6, 188, 238, 0.3);
    background: linear-gradient(145deg, #0099ff, #06bcee);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(6, 188, 238, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;

    svg {
      font-size: 1.1rem;
    }
  }
`;

export function Header() {
  const { open } = useAppKit();
  return (
    <HeaderContainer>
      <Logo>
        <FaGlobeAmericas />
        <span>MatrixApp</span>
      </Logo>
      <div>
        <button onClick={() => open()}>Connect Wallet</button>
      </div>
      <appkit-button />
    </HeaderContainer>
  );
}

export default Header;
