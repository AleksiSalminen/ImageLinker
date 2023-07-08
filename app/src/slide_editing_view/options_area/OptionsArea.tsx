import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import OptionEditDialog from './OptionEditDialog';


/**
 * Function that returns the options component
 * @param {Object} props received parameters
 */
function OptionsArea(props) {
    const { t } = useTranslation();

    const [selectedOption, setSelectedOption] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    /** Function that finds an option that has a certain ID */
    const findOption = (optionsArray, idToFind) => {
        for(let i = 0; i < optionsArray.length; i++) {
            if(optionsArray[i]['id'] === idToFind) {
                return optionsArray[i];
            }
        }
        return null;
    }

    /** Function that sets the selected option to be the chosen option,
    and opens the option edit dialog */
    const selectOption = (id) => {
        const option = findOption(props.options, id);
        if(option) {
            setSelectedOption(option);
            setEditDialogOpen(true);
        }
    }

    /** Function that closes the option editing dialog */
    const closeDialog = () => {
        setEditDialogOpen(false);
        setSelectedOption(null);
    }

    return (
        <Paper>
            <TableContainer style={{ height: "32rem" }}>
                <Table style={{ borderStyle: "double hidden hidden hidden", borderColor: "lightgrey", borderWidth: "thin" }} stickyHeader aria-label="options table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Button variant="outlined" size="small">
                                    +
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {t("OptionsArea.Options")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.options.map((row, index) => (
                            <TableRow hover key={"option" + row.id} onClick={() => selectOption(row.id)}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <OptionEditDialog
                open={editDialogOpen}
                closeDialog={closeDialog}
                option={selectedOption}
                slides={props.slides}
            />
        </Paper>
    );
}

export default OptionsArea;
