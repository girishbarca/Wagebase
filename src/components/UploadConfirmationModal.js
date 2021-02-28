import React, { useState } from 'react'

import close from'../img/close.svg';
import done from'../img/done.svg';

import './css/UploadConfirmationModal.css'
import '../common.css'


const UploadConfirmationModal = (props) => {
  const [status, setStatus] = useState(0)
  const [email, setEmail] = useState("")
  const name = props.restname || "Pizza Pizza"

  return (
    <div className="confirm-modal-master">
      <img src={close} className="close-img" alt="Saljuk's Mom" onClick={props.closeModal}/>
      <img src={done} className="confirm-img" alt="Saljuk's Mom"/>
      <div className="wage-added-text">
        Your wages have been added!
      </div>
      <div className="desc-part-i">
        Thank you for helping us in our mission to empower service workers.
        Your wage will show up anonymously as an unverified wage for
          <b> {name} </b>
      </div>
      {
        status === 0
        ? <div className="desc-part-ii">
            If you wish to verify you wages in our database,
            please enter your email below to initiate our secure verification procedure:
          </div>
        : <div className="desc-part-ii">
            Please check your email for information on how to verify your 
            wages in our database.
          </div>
      }
      {
        status === 0
        ? <div className="email-confirm-form">
            <input className="email-input" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"Enter your email"}/>
            <div className="btn btn-secondary btn-small"
              onClick={
                () => {
                  if (email) {
                    setStatus(1)
                  }
                }
              }
            >
              Verify
            </div>
          </div>
        : <div className="email-confirm-done">
            <b> Didn’t receive an email? </b>
            Click <a>here</a> to resend.
          </div>
      }
    </div>
  )
}

export default UploadConfirmationModal