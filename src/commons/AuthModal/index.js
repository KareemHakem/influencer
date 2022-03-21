import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animation from "../../assets/json/modelAnimation.json";
import { Modal } from "@mui/material";
import { Button } from "../Button";
import "./style.css";

function AuthModal({ openModal, handleCloseModal }) {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    if (url) {
      navigate(url);
    } else {
      navigate("/");
    }
    handleCloseModal();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="ModelCardStyleContainer">
          <h2>Please, Login or Register if you don't have an account</h2>

          <div>
            <Lottie options={defaultOptions} height={240} width={240} />
          </div>

          <div className="modelCardBtnContainer">
            <Button
              className="ModalBtn"
              title="Login"
              onClick={() => handleNavigate("/LoginPage")}
              width={100}
              height={40}
              margin={5}
            />
            <Button
              className="ModalBtn"
              title="Register"
              onClick={() => handleNavigate("/loginPage/RegisterPage")}
              width={100}
              height={40}
              margin={5}
            />
            <Button
              className="cancelModalBtn"
              title="Cancel"
              onClick={() => handleNavigate()}
              width={180}
              height={40}
              margin={5}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
