import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { Helmet, HelmetProvider } from 'react-helmet-async'

import MainEditingView from './main_editing_view/MainEditingView.jsx';
import SlideEditingView from './slide_editing_view/SlideEditingView.jsx';
import PresentationView from './presentation_view/PresentationView.jsx';


/**
 * Function that returns the main Slide Linker view
 * @param {Object} props received parameters
 */
function SlideLinker(props) {

  /** Active view settings are defined here */
  const MAIN_EDITING_VIEW = "Main editing view";
  const SLIDE_EDITING_VIEW = "Slide editing view";
  const PRESENTATION_VIEW = "Presentation view";
  const [activeView, setActiveView] = useState(MAIN_EDITING_VIEW);

  /** Settings for the user interface are defined here */
  const [primaryColor, setPrimaryColor] = useState("#977F55");
  const [secondaryColor, setSecondaryColor] = useState("#D1AF74");
  const [font, setFont] = useState("Gabriola");
  const [fontSize, setFontSize] = useState(20);
  const english = "en";
  const finnish = "fi";
  const [language, setLanguage] = useState(english);
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  /** Here the theme used in the user interface is defined */
  const theme = createTheme({
    palette: {
      mode: palletType,
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      }
    },
    typography: {
      fontFamily: font,
      fontSize: parseInt(fontSize)
    },
  });

  /** Function that changes the theme state from light->dark or dark->light */
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };


  /** This is used to group all the interface settings into one object */
  const interfaceSettings = [
    {
      theme: {
        darkState: darkState,
        handleThemeChange: handleThemeChange
      }
    },
    {
      font: {
        font: font,
        setFont: setFont,
        fontSize: fontSize,
        setFontSize: setFontSize
      }
    },
    {
      language: {
        english: english,
        finnish: finnish,
        language: language,
        setLanguage: setLanguage
      }
    },
    {
      colors: {
        primaryColor: primaryColor,
        setPrimaryColor: setPrimaryColor,
        secondaryColor: secondaryColor,
        setSecondaryColor: setSecondaryColor
      }
    }
  ];

  /** This is used to group all active view settings into one object */
  const activeViewSettings = {
    setActiveView: setActiveView,
    MAIN_EDITING_VIEW: MAIN_EDITING_VIEW,
    SLIDE_EDITING_VIEW: SLIDE_EDITING_VIEW,
    PRESENTATION_VIEW: PRESENTATION_VIEW
  }

  
  /** This is where the actual active view is returned 
  based on what view is currently active */
  if(activeView === MAIN_EDITING_VIEW) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>Slide Linker</title>
          </Helmet>
        </HelmetProvider>
  
        <MainEditingView
          activeViewSettings={activeViewSettings}

          selectedProjectInfo={props.selectedProjectInfo}
          changeSelectedProject={props.changeSelectedProject}
  
          slides={props.slides}
          updateSlides={props.updateSlides}
          selectSlide={props.selectSlide}
  
          interfaceSettings={interfaceSettings}
        />
      </ThemeProvider>
    );
  }
  else if(activeView === SLIDE_EDITING_VIEW) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>Slide Linker</title>
          </Helmet>
        </HelmetProvider>
  
        <SlideEditingView
          activeViewSettings={activeViewSettings}

          selectSlide={props.selectSlide}
          selectedSlide={props.selectedSlide}
          slides={props.slides}

          selectedProjectInfo={props.selectedProjectInfo}
          changeSelectedProject={props.changeSelectedProject}

          interfaceSettings={interfaceSettings}
        />
      </ThemeProvider>
    );
  }
  else if(activeView === PRESENTATION_VIEW) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
  
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>Slide Linker</title>
          </Helmet>
        </HelmetProvider>
        
        <PresentationView
          activeViewSettings={activeViewSettings}

          selectedProjectInfo={props.selectedProjectInfo}
          slides={props.slides}

          interfaceSettings={interfaceSettings}
        />
      </ThemeProvider>
    );
  }
}

export default SlideLinker;
