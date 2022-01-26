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
