import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


/**
 * Function that returns the view containing the table of slides
 * @param {Object} props received parameters
 */
function SlidesTable(props) {
  const [page, setPage] = React.useState(0);
  const [slidesPerPage, setSlidesPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setSlidesPerPage(+event.target.value);
    setPage(0);
  };

  const selectSlide = (id) => {
    alert(id);
  }

  return (
    <div>

      <Box>
        <Button variant="outlined">Sort</Button>&nbsp;
        <Button variant="outlined">Filter</Button>
      </Box>

      <Box>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="slides table">
              <TableHead>
                <TableRow>
                  <TableCell>Add</TableCell>
                  <TableCell>Heading</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.slides.slice(page * slidesPerPage, page * slidesPerPage + slidesPerPage).map((row, index) => (
                  <TableRow hover onClick={() => { selectSlide(row.id) }} key={row.name + "-" + index}>
                    <TableCell component="th" scope="row">
                      (image)
                    </TableCell>
                    <TableCell>
                      {row.heading}
                    </TableCell>
                    <TableCell>
                      {row.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
            component="div"
            count={props.slides.length}
            rowsPerPage={slidesPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

    </div>
  );
}

export default SlidesTable;
