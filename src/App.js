import React from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./navigation";
import "./App.css";

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

// TODO: Create order => orders/create
// TODO: Create report => reports/create 
// TODO: get orders for (admin/influncer/user) => orders/
// TODO: Reviews
// TODO: pagination


//  GET ------------------------------------------- POST _ PUT _ DELETE   PUT => edit  POST => creat new
//  Parameter: Nothing/ID ---------------------------- Values(and/or)ID
//  Return:    DATA ----------------------------------- Success/Data(login/register)
//  how?:      useEffect() ---------------------------- button submit/OnClick()
//  handling1: <Loading /> ---------------------------- loading in Button
//  handling2:  <Error /> ------------------------------ toast/notifaction
//  handling3:  display DATA --------------------------- toast/notifaction


// from top to button use rebase
// after : from button to top use merge

// const obj = {
//   name: "Mohamed",
//   age: 20,
// };

// const obj2 = {...obj, job:'developer'}
// console.log(obj2)
