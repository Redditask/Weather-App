import styles from "../styles/components/PreForm.module.scss";

import React from 'react';

const PreForm = ({children}) => {
    return (
            <div className={styles.PreForm}>
                <div className={styles.PreForm__element}>
                    <h5 className={styles.PreForm__image}>
                        {children}
                    </h5>
                    <div style={{textAlign:"center"}}>"weather"</div>
                </div>

                <div className={styles.PreForm__data}>
                    <div className={styles.PreForm__title}>Your location</div>
                    <div className={styles.PreForm__element}>"temperature"</div>
                    <div className={styles.PreForm__element}>"humidity"</div>
                    <div className={styles.PreForm__element}>"wind"</div>
                </div>
            </div>
    );
};

export default PreForm;
