import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

import MainEditingView from './main_editing_view/MainEditingView.js';


/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {
  const [font, setFont] = useState("Bahnschrift Light");
  const [fontSize, setFontSize] = useState(14);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";


  const theme = createMuiTheme({
    palette: {
      type: palletType
    },
    typography: {
      fontFamily: font,
      fontSize: fontSize
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MainEditingView
        selectedProjectInfo={props.selectedProjectInfo}
        changeSelectedProject={props.changeSelectedProject}
        darkState={darkState}
        handleThemeChange={handleThemeChange}
        font={font}
        setFont={setFont}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
    </ThemeProvider>
  );
}

export default SlideLinker;
