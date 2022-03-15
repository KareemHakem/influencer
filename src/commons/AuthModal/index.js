import React from "react";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

function AuthModal({openModal, handleCloseModal}) {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    if (url) {
      navigate(url);
    } else {
      navigate("/");
    }
    handleCloseModal();
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
        <div style={{ backgroundColor: "white", height: 400 }}>
          <h1>Please, Login or Register if you don't have an account</h1>
          <Button title="Login" onClick={() => handleNavigate("/LoginPage")} />
          <Button
            title="Register"
            onClick={() => handleNavigate("/loginPage/RegisterPage")}
          />
          <Button title="Cancel" onClick={() => handleNavigate()} />
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
