import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createAppKit } from "@reown/appkit/react";
import { metadata, PROJECT_ID, networks, ethersAdapter } from "./config";
import Header from "./components/Header";
import RecentActivity from "./components/RecentActivity";
import InfoCards from "./components/InfoCards";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Matrix from "./pages/MatrixPage";
import RegistrationPage from "./pages/RegistrationPage";
import GlobalStyle from "./styles/GlobalStyle";
import "./styles/LevelModal.css";

export function App() {
  createAppKit({
    adapters: [ethersAdapter],
    networks,
    metadata,
    PROJECT_ID,
    features: {
      analytics: true,
    },
  });

  console.log("MetaData:", ethersAdapter);
  const recentActivities = [
    {
      icon: "icon.png",
      description: "new user joined",
      id: "1839490",
      link: "#",
      time: "4 minutes ago",
    },
    // Add more activity data here
  ];

  const infoCardsData = [
    { title: "Members total", value: "1,839,487", change: "+538" },
    {
      title: "Members received",
      value: "151,305,283.6 BUSD",
      subValue: "22,679.4784 BNB",
      change: "+10,187 BUSD",
    },
    // Add more card data here
  ];

  return (
    <Router>
      <GlobalStyle />
      <div className="app-container">
        <Header />

        <main>
          <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                  <UserProfile />
                  <Matrix />
                  <div className="dashboard-section">
                    <RecentActivity activities={recentActivities} />
                    <InfoCards data={infoCardsData} />
                  </div>
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
