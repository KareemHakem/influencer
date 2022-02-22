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


//  GET ------------------------------------------- POST _ PUT _ DELETE   PUT => edit  POST => creat new
//  Parameter: Nothing/ID ---------------------------- Values(and/or)ID
//  Return:    DATA ----------------------------------- Success/Data(login/register)
//  how?:      useEffect() ---------------------------- button submit/OnClick()
//  handling1: <Loading /> ---------------------------- loading in Button
// handling2:  <Error /> ------------------------------ toast/notifaction
// handling3:  display DATA --------------------------- toast/notifaction

// ----> branch EditInfluencerProfile
// 1- Add validation schema //
// 2- to improve the design in the page //

// -----> Create Profile
// 1- add the page
// 2- create request in the request folder

// ----> FixingStyles
//  1- menu in navbar setDisplay to false after clicks
//  2- redesgin the menu navbar
//  3- improve login and register page //
//  4- the Delete Button in the favorite cart