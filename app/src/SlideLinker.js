import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


function SlidesTable(props) {

  const [slidesPerPage, setSlidesPerPage] = React.useState(10);

  let slides = [{"image": "(image)", "heading": "(heading)", "description": "(description)"}, {"image": "(image)", "heading": "(heading)", "description": "(description)"}];

  return (
    <div>
    
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
						{slides.map((row, index) => (
							<TableRow key={row.name + "-" + index}>
								<TableCell component="th" scope="row">
									{row.image} 
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
    </Paper>

    </div>
  );
}

function MainEditingView(props) {
  const selectedProject = props.selectedProjectInfo.selected
  const projectName = (selectedProject ? selectedProject.name : "(Create or open a project)");

  return (
    <div>

    <AppBar position="static">
      <Toolbar>
        <Box>
          <Button variant="contained" color="primary">New</Button>
          <Button variant="contained" color="primary">Open</Button>
          <Button variant="contained" color="primary">Play</Button>
          <Button variant="contained" color="primary">Settings</Button>
        </Box>
      </Toolbar>
    </AppBar>
    &nbsp;
    <Box>
      <Typography variant="h4" align="center">
        {projectName}&nbsp;
        <Button variant="contained">Change</Button>
      </Typography>
    </Box>
    &nbsp;
    <SlidesTable/>

    </div>
  );
}


function SlideLinker(props) {
  
  return (
    <div>
      <MainEditingView
        selectedProjectInfo = {props.selectedProjectInfo}
      />
    </div>
  );
}

export default SlideLinker;
