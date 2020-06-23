import React from 'react';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the presentation view
 * @param {Object} props received parameters
 */
function PresentationView(props) {
    const { t } = useTranslation();

    return (
        <div>Presentation view</div>
    );
}

export default PresentationView;
