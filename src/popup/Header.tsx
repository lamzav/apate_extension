import React from 'react';
import * as styles from './Header.module.css';

function Header() {
    return (
        <header>
            <img
                className={styles.logo}
                alt="Apate Logo"
                src="./images/icon24_gray.png"
                height="18"
                width="18"
            />
            <h2 className={styles.title}>Apate - Fighting Misinformation</h2>
        </header>
    );
}

export default Header;