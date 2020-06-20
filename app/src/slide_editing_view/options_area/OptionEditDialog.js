import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

import SlidesTable from './slides_table/SlidesTable.js';


/**
 * Function that returns the option editing dialog
 * @param {Object} props received parameters
 */
function OptionEditDialog(props) {
    const [title, setTitle] = useState(props.option ? props.option.title : null);
    const [endPoint, setEndPoint] = useState(props.option ? props.option.endpoint_id : null);

    const updateTitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <Dialog open={props.open} onClose={props.closeDialog} style={{ padding:"0.5rem" }}>
            <Box style={{ padding:"1rem" }}>
                <TextField label="Title" defaultValue={props.option ? props.option.title : null} value={title} onChange={updateTitle}/>

                <SlidesTable slides={props.slides}/>
            </Box>
        </Dialog>
    );
}

export default OptionEditDialog;
