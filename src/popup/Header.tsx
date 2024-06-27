import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import * as styles from './Header.module.css';

function Header() {
    const handleCloseButtonClick = () => {
        window.close(); // Close the browser extension window
    };

    return (
        <header className="container">
            <img
                className={styles.logo}
                alt="Apate Logo"
                src="./images/icon24_gray.png"
                height="18"
                width="18"
            />
            <h2 className={styles.title}>Apate - Fighting Misinformation</h2>
            <button
                className={`icon-button ${styles.closeButton}`}
                aria-label="Close window"
                title="Close window"
                onClick={handleCloseButtonClick}>
                    <FontAwesomeIcon icon={faXmark} />
            </button>
        </header>
    );
}

export default Header;