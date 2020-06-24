import React from 'react';

/** --------- Tab Panel which consist of media list component ---------- */
const TabPanel = props => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}>
            {children}
        </div>
    );
}

export default TabPanel