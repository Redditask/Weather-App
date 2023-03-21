import React, {ReactNode} from "react";

import styles from "../../styles/components/UI/Header.module.scss";

import { WiCloud } from "react-icons/wi";

interface HeaderProps {
    children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <nav className={styles.Header}>
            <WiCloud size="5rem"/>
            {children}
        </nav>
    );
};

export default Header;
