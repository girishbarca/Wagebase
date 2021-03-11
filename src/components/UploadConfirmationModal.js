import React from "react";

import close from "../img/close.svg";
import done from "../img/done.svg";

import "./css/UploadConfirmationModal.css";
import "../common.css";

const UploadConfirmationModal = (props) => {
  const name = props.restName || "Pizza Pizza";

  return (
    <div className="confirm-modal-master">
      <img
        src={close}
        className="close-img"
        alt="Confirm Modal"
        onClick={props.closeModal}
      />
      <img src={done} className="confirm-img" alt="Confirm" />
      <div className="wage-added-text">Your wages have been added!</div>
      <div className="desc-part-i">
        Thank you for helping us in our mission to empower service workers. Your
        wage will show up anonymously as an unverified wage for
        <b> {name} </b>
      </div>

      <div className="desc-part-ii">
        Please check your email for information on how to verify your wages in
        our database.
      </div>

      <div className="email-confirm-done">
        <b> Didn’t receive an email? </b>
        Click <a className="standalone-link">here</a> to resend.
      </div>
    </div>
  );
};

export default UploadConfirmationModal;
