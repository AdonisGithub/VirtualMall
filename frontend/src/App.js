import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Footer} from "./components/footer";
import {HomePage} from './page/Homepage';
import {SignupPage} from './page/SignupPage';
import {LoginPage} from "./page/LoginPage";
import {ResetPasswordRequestPage1} from "./page/ResetPasswordPage/ResetPasswordRequestPage1";
import {ResetPasswordRequestPage2} from "./page/ResetPasswordPage/ResetPasswordRequestPage2";
import {ResetPasswordPage} from "./page/ResetPasswordPage/ResetPasswordPage";
import { SellerHomePage } from './page/SellerHompage';
import { SellerSignupPage } from './page/SellerSignupPage';
import {ForgottenPasswordEmailPage}from"./page/ForgottenPasswordEmailPage/ForgottenPasswordEmailPage";
import { WellcomeEmailPage } from './page/WellcomeEmailPage/WellcomEmailPage';
import { ForgottenPasswordEmailAfter1Page } from './page/ForgottenPasswordEmailAfter1/ForgottenPasswordEmailAfter1Page';
import { SellerSignupCongratuationsPage } from './page/SellerSignupCongratualtionsPage';
import Example from "./page/exersise";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/resetpasswordrequest1" element={<ResetPasswordRequestPage1 />} />
          <Route exact path="/resetpasswordrequest2" element={<ResetPasswordRequestPage2 />} />
          <Route exact path="/resetpassword" element={<ResetPasswordPage/>} />
          <Route exact path="/sellerhomepage" element={<SellerHomePage/>} />
          <Route exact path="/sellersignup" element={<SellerSignupPage/>} />
          <Route exact path="/forgottenpasswordemail" element={<ForgottenPasswordEmailPage/>} />
          <Route exact path="/wellcomeemail" element={<WellcomeEmailPage/>} />
          <Route exact path="/forgottenpasswordemailafter1" element={<ForgottenPasswordEmailAfter1Page/>} />
          <Route exact path="/sellersignupcongratulations" element={<SellerSignupCongratuationsPage/>} />
          <Route exact path="/exersise" element={<Example />} />
        </Routes>
        <Footer />
      </Router>
  );
}
export default App;
