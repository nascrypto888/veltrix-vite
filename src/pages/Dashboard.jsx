import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled(motion.div)`
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #e0e0e0;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Welcome to Your Dashboard</h3>
        <p>Track your performance and view your matrix.</p>
      </Card>
      {/* Add more cards for other stats */}
    </DashboardContainer>
  );
};

export default Dashboard;
