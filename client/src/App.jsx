import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';


const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-black min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path='/external' element={<ExternalRedirect />}></Route>
        </Routes>
      </div>
    </div>
  )
}

function ExternalRedirect() {
  React.useEffect(() => {
    window.location.href = 'https://sepolia-faucet.pk910.de/';
  }, []);

  return <p>Redirecting...</p>;
}

export default App