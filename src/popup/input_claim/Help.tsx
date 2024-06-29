import React, { useEffect, useState } from "react";
import * as styles from "./Help.module.css";
import { MAX_CHAR_COUNT } from "./InputClaim";
import Modal from "react-modal";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Help() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#window");
  }, []);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      <button
        className="icon-button"
        data-testid="help-button"
        title="Help"
        aria-label="Help"
        onClick={togglePopup}
      >
        <FontAwesomeIcon icon={faCircleQuestion} />
      </button>
      <Modal
        className={styles.helpModal}
        isOpen={showPopup}
        onRequestClose={togglePopup}
        contentLabel="Help Modal"
      >
        <div className={styles.helpPopup} data-testid="help-modal">
          <h2 className={styles.helpTitle}>How to verify a claim</h2>
          <p className={styles.helpText}>
            <span className={styles.optionText}>Option 1</span>: Type a claim
            directly in the text area. Then, click &quot;Verify&quot;
          </p>
          <p className={styles.helpText}>
            <span className={styles.optionText}>Option 2</span>: Highlight claim
            text on the page, right-click, and select &quot;Verify claim with
            Apate&quot;
          </p>
          <em className={styles.noteText}>
            Note: Claim text will be truncated to the first {MAX_CHAR_COUNT}{" "}
            characters
          </em>
          <div className={`container ${styles.closeButtonDiv}`}>
            <button
              className={`button ${styles.closeButton}`}
              data-testid="modal-close-button"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Help;
