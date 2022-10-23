import styles from "../../styles/components/UI/Modal.module.scss"

import React from 'react';

const Modal = ({children, visible, setVisible}) => {

    const root = [styles.Modal];
    if(visible) root.push(styles.active)

    return (
        <div className={root.join(" ")} onClick={()=>setVisible(false)}>
            <div className={styles.ModalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
