// src/components/UserProfile.js
import React from 'react';
import styled from 'styled-components';
import { FaCopy} from 'react-icons/fa';
import { BsArrowUpShort, BsPersonFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';

const UserProfile = () => {
    const handleCopyLink = () => {
        navigator.clipboard.writeText('forsage.io/b/pxygg9');
        // You could add a toast notification here
    };

    return (
        <ProfileContainer>
            <ProfileHeader>
                <AvatarContainer>
                    <BsPersonFill size={40} color="#fff" />
                </AvatarContainer>
                <UserInfo>
                    <UserName>
                        MR <span>Naseer</span>
                        <IdBadge>ID 1727925</IdBadge>
                    </UserName>
                    <WalletInfo>
                        <BiWallet />
                        <WalletAddress>0xC4Ac...9111</WalletAddress>
                        <CopyButton onClick={() => navigator.clipboard.writeText('0xC4Ac...9111')}>
                            <FaCopy size={14} />
                        </CopyButton>
                    </WalletInfo>
                    <InvitationText>
                        Invited 30.05.2024 by ID 1711259
                    </InvitationText>
                </UserInfo>
            </ProfileHeader>

            <LinkContainer>
                <PersonalLink>forsage.io/b/pxygg9</PersonalLink>
                <ActionButtons>
                    <IconButton onClick={handleCopyLink}>
                        <FaCopy /> Copy
                    </IconButton>
                    
                </ActionButtons>
            </LinkContainer>

            

            <StatsGrid>
                <StatCard>
                    <StatLabel>Partners</StatLabel>
                    <StatValue>23</StatValue>
                    <StatChange>
                        <BsArrowUpShort /> 0
                    </StatChange>
                </StatCard>
                <StatCard>
                    <StatLabel>Team</StatLabel>
                    <StatValue>135</StatValue>
                    <StatChange positive>
                        <BsArrowUpShort /> 3
                    </StatChange>
                </StatCard>
                <StatCard>
                    <StatLabel>Ratio</StatLabel>
                    <StatValue>384%</StatValue>
                    <StatChange positive>
                        <BsArrowUpShort /> 19%
                    </StatChange>
                </StatCard>
                <StatCard>
                    <StatLabel>Profits</StatLabel>
                    <StatValue>
                        395.6 BUSD
                        <SmallText>0.009 BNB</SmallText>
                    </StatValue>
                    <StatChange positive>
                        <BsArrowUpShort /> 20
                    </StatChange>
                </StatCard>
            </StatsGrid>
        </ProfileContainer>
    );
};

// Styled Components
const ProfileContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    color: #fff;
    background: #1a1a1a;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;

    @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
    }
`;

const AvatarContainer = styled.div`
    width: 80px;
    height: 80px;
    background: linear-gradient(145deg, #2a2a2a, #333);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(6, 188, 238, 0.3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        border-color: rgba(6, 188, 238, 0.5);
        box-shadow: 0 6px 12px rgba(6, 188, 238, 0.2);
    }

    svg {
        color: #06bcee;
        transition: color 0.3s ease;
    }

    &:hover svg {
        color: #fff;
    }
`;

const UserInfo = styled.div`
    flex: 1;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const UserName = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 12px;
    
    span {
        color: #06bcee;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const IdBadge = styled.span`
    background: rgba(6, 188, 238, 0.1);
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 14px;
    color: #06bcee;
`;

const WalletInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    color: #888;
`;

const WalletAddress = styled.span`
    font-family: monospace;
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 4px;
    
    &:hover {
        color: #06bcee;
    }
`;

const InvitationText = styled.div`
    font-size: 14px;
    color: #666;
`;

const LinkContainer = styled.div`
    background: linear-gradient(145deg, #2a2a2a, #333);
    padding: 16px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        text-align: center;
    }
`;

const PersonalLink = styled.div`
    color: #06bcee;
    font-family: monospace;
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: 480px) {
        flex-direction: column;
        width: 100%;
    }
`;

const IconButton = styled.button`
    background: rgba(6, 188, 238, 0.1);
    color: #06bcee;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;
    text-decoration: none;

    &:hover {
        background: rgba(6, 188, 238, 0.2);
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;


const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 0 40px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 20px;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`;

const StatCard = styled.div`
    background: linear-gradient(145deg, #2a2a2a, #333);
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease;
    border: 1px solid rgba(6, 188, 238, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        transform: translateY(-5px);
        border: 1px solid rgba(6, 188, 238, 0.3);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

const StatLabel = styled.div`
    color: #888;
    font-size: 1rem;
    margin-bottom: 12px;
    font-weight: 500;
`;

const StatValue = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 12px 0;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const SmallText = styled.div`
    font-size: 0.9rem;
    color: #888;
    margin-top: 8px;
`;

const StatChange = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 0.9rem;
    color: ${props => props.positive ? '#06bcee' : '#666'};
    background: ${props => props.positive ? 'rgba(6, 188, 238, 0.1)' : 'transparent'};
    padding: ${props => props.positive ? '4px 12px' : '4px'};
    border-radius: 16px;
    margin-top: 8px;
`;

export default UserProfile;
