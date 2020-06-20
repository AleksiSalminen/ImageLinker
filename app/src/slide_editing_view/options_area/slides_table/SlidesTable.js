import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import SlidesTableSortButton from './SlidesTableSortButton.js';
import SlidesTableFilterButton from './SlidesTableFilterButton';


/**
 * Function that returns the view containing the table of slides
 * @param {Object} props received parameters
 */
function SlidesTable(props) {
  const { t } = useTranslation();
  const [slideArray, setSlides] = useState(props.slides ? props.slides : []);
  const [page, setPage] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(5);

  let slides = slideArray;

  /* Filtering settings */
  const [filterHeading, setFilterHeading] = useState(null);

  /* Apply filters */

  if(filterHeading) {
    slides = slides.filter(slide => slide.heading.includes(filterHeading));
  }

  /* Table page handling */

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setSlidesPerPage(+event.target.value);
    setPage(0);
  };


  const updateSlides = (slides) => {
    setSlides(slides);
  }

  const findSlide = (slideArray, idToFind) => {
    for(let i = 0; i < slideArray.length; i++) {
      if(slideArray[i]['id'] === idToFind) {
          return slideArray[i];
      }
    }
    return null;
  }

  const selectSlide = (id) => {
    const slide = findSlide(slides, id);
    if(slide) {
      alert(JSON.stringify(slide));
    }
  }

  return (
    <div style={{ margin:"auto", marginTop:"1.0rem", paddingTop:"1.0rem", paddingBottom:"1.0rem", borderStyle:"double", borderWidth:"thin", borderRadius:"1.0rem", borderColor:"lightgrey"}}>

      <Box>
        &nbsp;&nbsp;&nbsp;&nbsp;

        <SlidesTableSortButton
          slides={slides}
          updateSlides={updateSlides}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;

        <SlidesTableFilterButton
          filterHeading={filterHeading}
          setFilterHeading={setFilterHeading}
        />
      </Box>
      <br/>
      <Box>
        <Paper>
          <TableContainer>
            <Table size="small" style={{borderStyle:"double hidden hidden hidden", borderColor:"lightgrey", borderWidth:"thin"}} stickyHeader aria-label="slides table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <p></p>
                  </TableCell>
                  <TableCell>
                    {t("SlidesTable.Heading")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {slides.slice(page * slidesPerPage, page * slidesPerPage + slidesPerPage).map((row, index) => (
                  <TableRow hover onClick={() => { selectSlide(row.id) }} key={row.name + "-" + index}>
                    <TableCell component="th" scope="row">
                      (image)
                    </TableCell>
                    <TableCell>
                      {row.heading}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            component="div"
            count={slides.length}
            rowsPerPage={slidesPerPage}
            labelRowsPerPage={t("SlidesTable.RowsPerPage")}
            backIconButtonText={t("SlidesTable.BackButton")}
            nextIconButtonText={t("SlidesTable.NextButton")}
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
