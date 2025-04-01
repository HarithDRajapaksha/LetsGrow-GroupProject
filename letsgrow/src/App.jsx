import React from 'react'
import Landingpage from './Pages/Landing page/Landingpage'
import RegistrationPage from './Pages/Registrationpage/RegistrationPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import ForgotPassword from './Pages/LoginPage/ForgotPassword'
import ChangePassword from './Pages/LoginPage/ChangePassword'
import OTPVerification from './Pages/LoginPage/OTPVerification'
import OurTeam from './Components/our team/OurTeam'
import StartupProfile from './Pages/UserProfilepage/StartupProfile/StartupProfile'
import StartupDashboard from './Pages/Dashboards/Startup/StartupDashboard'
import InvestorProfile from './Pages/UserProfilepage/InvestorProfile/InvestorProfile'
import RatingPage from './Pages/Rating page/RatingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InvestorDashboard from './Pages/Dashboards/Investors/InvestorDashboard'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/team" element={<OurTeam/>} />
          <Route path='/startup-profile' element={<StartupProfile/>}/>
          <Route path="/startup-dashboard" element={<StartupDashboard/>}/>
          <Route path="/investor-profile" element={<InvestorProfile/>}/>
          <Route path="/investor-dashboard" element={<InvestorDashboard/>}/>
          <Route path="/rating-page" element={<RatingPage/>}/>
          <Route path="/register" element={<RegistrationPage />} /> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path='/ForgotPassword' element={<ForgotPassword/>} /> 
          <Route path='/ChangePassword' element={<ChangePassword/>} />
          <Route path='/OTPVerification' element={<OTPVerification/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
