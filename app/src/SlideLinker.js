import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Helmet } from 'react-helmet'

import MainEditingView from './main_editing_view/MainEditingView.js';


/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {
  const [primaryColor, setPrimaryColor] = useState("#977F55");
  const [secondaryColor, setSecondaryColor] = useState("#D1AF74");
  const [font, setFont] = useState("Gabriola");
  const [fontSize, setFontSize] = useState(20);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";


  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      }
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

      <Helmet>
        <meta charSet="utf-8"/>
        <title>Slide Linker</title>
      </Helmet>

      <MainEditingView
        selectedProjectInfo={props.selectedProjectInfo}
        changeSelectedProject={props.changeSelectedProject}

        slides={props.slides}
        updateSlides={props.updateSlides}

        darkState={darkState}
        handleThemeChange={handleThemeChange}

        font={font}
        setFont={setFont}
        fontSize={fontSize}
        setFontSize={setFontSize}
        
        primaryColor={primaryColor}
        setPrimaryColor={setPrimaryColor}
        secondaryColor={secondaryColor}
        setSecondaryColor={setSecondaryColor}
      />
    </ThemeProvider>
  );
}

export default SlideLinker;
