import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import SlidesTableSortButton from './SlidesTableSortButton';
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

  /* Filtering settings */
  const [filterHeading, setFilterHeading] = useState(null);

  let slides = slideArray;

  /* Apply filters */

  if(filterHeading) {
    slides = slides.filter(slide => slide.heading.includes(filterHeading));
  }

  
  /** Function that changes the page of the table */
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /** Function that changes the number of slides shown per page */
  const handleChangeRowsPerPage = (event) => {
    setSlidesPerPage(+event.target.value);
    setPage(0);
  };

  /** Function that updates the slides */
  const updateSlides = (slides) => {
    setSlides(slides);
  }

  /** Function that finds a slide with a certain ID.
  If no match is found, returns null */
  const findSlide = (slideArray, idToFind) => {
    for(let i = 0; i < slideArray.length; i++) {
      if(slideArray[i]['id'] === idToFind) {
          return slideArray[i];
      }
    }
    return null;
  }

  /** Function that sets the selected slide to be the slide chosen
  and changes the slide editing view to be active */
  const selectSlide = (id) => {
    const slide = findSlide(slides, id);
    if(slide) {
      props.setEndPoint(slide);
    }
  }

  return (
    <div style={{width:"90%", margin:"auto", paddingTop:"1.0rem", paddingBottom:"1.0rem", borderStyle:"double", borderWidth:"thin", borderRadius:"1.0rem", borderColor:"lightgrey"}}>
      
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
            page={page}
            onPageChange={handleChangePage}
          />
        </Paper>
      </Box>

    </div>
  );
}

export default SlidesTable;
