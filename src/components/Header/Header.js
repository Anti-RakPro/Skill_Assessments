import styles from './Header.module.css'
import jsLogo from '../../img/logo/images.png'
import React from "react";


function Header() {
    return (
        <div className={styles['header-bg']}>
            <div className={styles['header-main']}>
                <img className={styles['topic-logo']} src={jsLogo} alt='' />
                <p>Skill assessment</p>
            </div>
        </div>)
}

export default Header