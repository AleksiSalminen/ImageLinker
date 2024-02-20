import React from "react"
import { useTranslation } from "react-i18next"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

/**
 * Function that returns the options component
 * @param {Object} props received parameters
 */
function OptionsArea(props) {
    const { t } = useTranslation()

    /** Function that returns different styles for differently valued options */
    const getRowStyles = (row) => {
        if (props.selectedOption) {
            if (row.id === props.selectedOption.id) {
                return { backgroundColor: "lightgrey" }
            }
        }
        return {}
    }

    /** Function that finds the option with a certain ID */
    const findOption = (optionsArray, idToFind) => {
        for (let i = 0; i < optionsArray.length; i++) {
            if (optionsArray[i]["id"] === idToFind) {
                return optionsArray[i]
            }
        }
        return null
    }

    /** Function that updates the selected option */
    const selectOption = (id) => {
        const option = findOption(props.options, id)
        if (option) {
            props.setSelectedOption(option)
        }
    }

    return (
        <Paper>
            <TableContainer style={{ height: "30rem" }}>
                <Table
                    style={{ borderStyle: "double hidden hidden hidden", borderColor: "lightgrey", borderWidth: "thin" }}
                    stickyHeader
                    aria-label="options table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("OptionsArea.Options")}</TableCell>
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
    )
}

export default OptionsArea
