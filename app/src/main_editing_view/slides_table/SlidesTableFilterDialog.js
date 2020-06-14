import React from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';


/**
 * Function that returns the filter dialog for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableFilterDialog(props) {
    const { t } = useTranslation();

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            
        </Dialog>
    );
}

export default SlidesTableFilterDialog;
