import React, {ReactNode} from "react";

import styles from "../../styles/components/UI/Modal.module.scss"

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({children, visible, setVisible}) => {
    const root = [styles.Modal];
    if(visible) root.push(styles.active);

    const modalStatusHandler = () => setVisible(false);

    const propagationHandler = (event: any) => event.stopPropagation();

    return (
        <div className={root.join(" ")} onClick={modalStatusHandler}>
            <div className={styles.ModalContent} onClick={propagationHandler}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
