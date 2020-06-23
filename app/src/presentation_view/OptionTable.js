import React from 'react';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


/**
 * Function that returns the options component
 * @param {Object} props received parameters
 */
function OptionsArea(props) {
    const { t } = useTranslation();

    const getRowStyles = (row) => {
        if(props.selectedOption) {
            if(row.id === props.selectedOption.id) {
                return { backgroundColor: "lightgrey" };
            }
        }

        return { };
    }

    const findOption = (optionsArray, idToFind) => {
        for(let i = 0; i < optionsArray.length; i++) {
            if(optionsArray[i]['id'] === idToFind) {
                return optionsArray[i];
            }
        }
        return null;
    }

    const selectOption = (id) => {
        const option = findOption(props.options, id);
        if(option) {
            props.setSelectedOption(option);
        }
    }

    return (
        <Paper>
            <TableContainer style={{ height: "32rem" }}>
                <Table style={{ borderStyle: "double hidden hidden hidden", borderColor: "lightgrey", borderWidth: "thin" }} stickyHeader aria-label="options table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {t("OptionsArea.Options")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.options.map((row, index) => (
                            <TableRow style={getRowStyles(row)} hover key={"option" + row.id} onClick={() => selectOption(row.id)}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default OptionsArea;
