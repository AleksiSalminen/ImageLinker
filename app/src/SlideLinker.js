import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function SlidesTable(props) {

  return (
    <div>

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
