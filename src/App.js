import React from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./navigation";
import "./App.css";
// from top to button use rebase
// after : from button to top use merge

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Navigation />
    </div>
  );
}

export default App;

//    GET ------------------------------------------- POST _ PUT _ DELETE
//  Parameter: Nothing/ID ---------------------------- Values(and/or)ID
//  Return:    DATA ----------------------------------- Success/Data(login/register)
//  how?:      useEffect() ---------------------------- button submit/OnClick()
//  handling1: <Loading /> ---------------------------- loading in Button
// handling2:  <Error /> ------------------------------ toast/notifaction
// handling3:  display DATA --------------------------- toast/notifaction

// ----> Branch FixInfluencerReq
// 1- create influencer folder in the redux  (blackList)
//  2- call it in the influencer page && influencer profile
//  comment api/req/influencer  or delete
// ----> Branch Formik
//  1- Create FormInput
//  2- Create FormSelect
// ----> branch EditInfluencerProfile
// 1- check the names of the input in the backend (models/InfluencerModel)
// 2- add Formik && FromInput  FormSelect in the FromComponent
// 3- Add validation schema
