import React from 'react';
import Dialog from '@material-ui/core/Dialog';


/**
 * Function that returns the option editing dialog
 * @param {Object} props received parameters
 */
function OptionEditDialog(props) {

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            
        </Dialog>
    );
}

export default OptionEditDialog;
