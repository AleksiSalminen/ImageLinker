import React from 'react';

import Button from '@material-ui/core/Button';
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

    return (
        <Paper>
            <TableContainer style={{ height:"32rem" }}>
                <Table style={{borderStyle:"double hidden hidden hidden", borderColor:"lightgrey", borderWidth:"thin"}} stickyHeader aria-label="options table">
                <TableHead>
                        <TableRow>
                            <TableCell>
                                <Button variant="outlined" size="small">
                                    +
                                </Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Options
                            </TableCell>
                        </TableRow>
                </TableHead>
                <TableBody>
                    {props.options.map((row, index) => (
                        <TableRow hover key={"option"+row.id}>
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
