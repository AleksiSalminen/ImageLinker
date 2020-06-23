import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Helmet } from 'react-helmet'

import MainEditingView from './main_editing_view/MainEditingView.js';
import SlideEditingView from './slide_editing_view/SlideEditingView.js';


/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {
  const MAIN_EDITING_VIEW = "Main editing view";
  const SLIDE_EDITING_VIEW = "Slide editing view";
  const PRESENTATION_VIEW = "Presentation view";
  const [activeView, setActiveView] = useState(MAIN_EDITING_VIEW);

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


  if(activeView === MAIN_EDITING_VIEW) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Slide Linker</title>
        </Helmet>
  
        <MainEditingView
          setActiveView={setActiveView}
          MAIN_EDITING_VIEW={MAIN_EDITING_VIEW}
          SLIDE_EDITING_VIEW={SLIDE_EDITING_VIEW}
          PRESENTATION_VIEW={PRESENTATION_VIEW}

          selectedProjectInfo={props.selectedProjectInfo}
          changeSelectedProject={props.changeSelectedProject}
  
          slides={props.slides}
          updateSlides={props.updateSlides}
          selectSlide={props.selectSlide}
  
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
  else if(activeView === SLIDE_EDITING_VIEW) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <Helmet>
          <meta charSet="utf-8"/>
          <title>Slide Linker</title>
        </Helmet>
  
        <SlideEditingView
          history={props.history}

          setActiveView={setActiveView}
          MAIN_EDITING_VIEW={MAIN_EDITING_VIEW}
          SLIDE_EDITING_VIEW={SLIDE_EDITING_VIEW}
          PRESENTATION_VIEW={PRESENTATION_VIEW}

          selectSlide={props.selectSlide}
          selectedSlide={props.selectedSlide}
          slides={props.slides}

          selectedProjectInfo={props.selectedProjectInfo}
          changeSelectedProject={props.changeSelectedProject}

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
  else if(activeView === PRESENTATION_VIEW) {

  }
}

export default SlideLinker;
