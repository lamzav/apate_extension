import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./Header.module.css";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCloseButtonClick = () => {
    window.close(); // Close the browser extension window
  };

  return (
    <header className="container">
      <button
        className={styles.logoButton}
        aria-label="Apate Logo"
        title="Apate Logo"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          alt="Apate Logo"
          src={isHovered ? "./images/icon24_dark.png" : "./images/icon32.png"}
          height="18"
          width="18"
        />
      </button>
      <h2 className={styles.title}>Apate - Fighting Misinformation</h2>
      <button
        className={`icon-button ${styles.closeButton}`}
        aria-label="Close window"
        title="Close window"
        onClick={handleCloseButtonClick}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </header>
  );
}

export default Header;
