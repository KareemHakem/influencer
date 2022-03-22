import React from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./navigation";
import "./App.css";


// from top to button use rebase
// after : from button to top use merge

// TODO: Display Influncers in the Detail Screen
// TODO: User Edit info PUT: users/profile
// TODO: Admin EDit User PUT: users/:id
// TODO: get Reports reports
// TODO: STYLE 


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
