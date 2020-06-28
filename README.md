# Slide Linker
Program to create presentations of slides linked to other slides

## Used Tools
The application was developed using React, Material-UI, and Redux Thunk.

Material-UI packages used:
-	material-ui/core
-	material-ui/icons
-	material-ui/lab
-	material-ui-color-picker

react-i18next was used for internationalization and translations.

React Helmet was used to manually set the application’s name. Could be used to define other meta data as well.

react-hotkeys-hook was used to define the keyboard shortcuts used in the application.

NOTE:
An old version of react-scripts was used, because I could not even start the application with any of the react-scripts versions beyond 2.1.8
Because of this, there might appear a lot of warnings when installing the dependencies. You can try if the application works with the newest react-scripts, but I haven’t been able to get it to work.

## Introduction
Slide Linker makes it possible to create “presentations” where an individual slide 
can be linked to any other slide. The traversal between slides will happen through 
selecting an option from a variety of options. Each option has a predefined endpoint, 
a link to another slide, where the user will be directed to after choosing the option.
This allows a non-linear traversal of the presentation, where the path traversed by the user is defined by the decisions the user makes. 

For this reason, the application could be used to create flexible inquiries, 
decision-based role-playing “games”, teaching material, or any other type of 
content where flexible decision-focused approach is required.

## Functionality
The application has the following main functionality:

-	Operations to do to the manipulated data:

	o	Updating textual and numerical information, for example, changing the heading of the slide

	o	Modify the position, size and rotation angle of the slide image

	o	Modify slides’ options
	
	o	Modify individual slides in the project
	
	o	Sort and filter the project’s slides in the main editing view
	
-	Undo and redo:

	o	Available in the slide editing view
	
-	Settings, where the interface parameters can be adjusted:

	o	Light/dark mode

	o	Changing the language (Finnish/English)

	o	Changing the primary and secondary colors of the interface

	o	Changing the font used in the application

	o	Changing the font size used in the application
	
-	Keyboard shortcuts, keyboard navigation:

	o	TAB-key to switch active element in the interface

	o	ENTER-key to activate the active element (if possible)

	o	In the slide editing view:
			Ctrl+Z to undo, Ctrl+Y to redo, Ctrl+S to save, Ctrl+D to delete, Ctrl+C to cancel

-	A structural component:

	o	Slides table in the main editing view, showcasing the project slides

In addition, it has the following features:

-	Loading a file:

	o	The user can load project files and image files

-	Internationalization:

	o	Two languages (Finnish/English) to choose for the interface

-	Drag and drop:

	o	The user can drag-n-drop an image to the image field in the slide editing view

Unfortunately, due to the limitations of client-side JavaScript, creating, saving and deleting files has not been implemented.

To properly implement these features, I would have had to create an actual backend for the application. I decided not to include an actual backend to this version of the application.
Awkwardly, this is why some of the buttons in the interface don’t do anything. 

## User Interface
The user interface consists of four views:
-	The welcome view is the view shown to the user when the user first enters the application site.
		
-	The main editing view is where an overview of the open project can be examined.
		
-	The slide editing view consists of all the settings available for an individual slide. To get here, a slide has to be chosen in the main editing view.

-	The presentation view offers the presentation of the project. This view is where the actual project can be used and tested. 

## Software Structure

### Connections between different resources
index.js file is the main file of the application.

In this file, the Redux store is connected to the interface’s main component (SlideLinker), and the main component is rendered.

SlideLinker.js is the file containing the main interface component.

Also, the react-i18next object is initialized here. react-i18next enables internationalization in the application.

i18n.js file includes the initialization settings for react-i18next.

### Redux structure and implementation
Redux store’s state and actions are mapped to interface components in the file index.js

Redux store implementation is found in folder /src/state
- The action type definitions are found in file /src/state/action_types/projectsTypes.js
- The action definitions are found in file /src/state/actions/projectsActions.js
- The project reducers are found in file /src/state/reducers/projectsReducers.js
- The store’s root reducer is found in file /src/state/reducers/mainReducers.js

State (reducers’) structure:

{
          projectList: {},
          addedProject: {},
          selectedProject: {
                    selectedProjectInfo: {},
                    slideList: {},
                    addedSlide: {},
                    selectedSlide: {},
                    updatedSlide: {},
                    deletedSlide: {}
          },
          updatedProject: {},
          deletedProject: {}
}

### Important resource files
react-i18next loads the translations from folder /public/locales
English translations are loaded from file /public/locales/en/translation.json
Finnish translations are loaded from file /public/locales/fi/translation.json

The project files can be found in folder /src/save_files
Two default project files are provided:
	An awesome project.json
	Hello project.json
The images related to the projects are found in folder /src/save_files/images
In this version of the application, the application cannot load the images automatically, but they could be used to test the drag-n-drop or other image features, for example.

### Interface components’ structure
The following structure expresses the parent/child relations between the interface components. 

```
Slide Linker
│
├── MainEditingView
│          ├── WelcomeView
│          ├── SlidesTable
│          │          ├── SlidesTableFilterButton
│          │          ├── SlidesTableFilterDialog
│          │          ├── SlidesTableSortButton
│          │          └── SlidesTableSortDialog 
│          └──  TopBar
│                    ├── OpenProjectButton
│                    ├── PlayProjectButton
│                    ├── ProjectTitleArea
│                    └── SettingsMenu
│                              ├── LightModeSelector
│                              ├── LanguageSelector
│                              ├── FontSelector
│                              │          └── (fonts)
│                              ├── FontSizeSelector
│                              └── ColorsPicker
├── SlideEditingView
│          ├──  TopBar 
│          │          ├── HistoryButtons
│          │          └── SettingsMenu
│          │                    ├── LightModeSelector
│          │                    ├── LanguageSelector
│          │                    ├── FontSelector
│          │                    │          └── (fonts)
│          │                    ├── FontSizeSelector
│          │                    └── ColorsPicker
│          ├── OptionsArea
│          │          └── OptionEditDialog
│          │                    └── SlidesTable
│          │                              ├── SlidesTableFilterButton
│          │                              ├── SlidesTableFilterDialog
│          │                              ├── SlidesTableSortButton
│          │                              └── SlidesTableSortDialog
│          ├── InfoArea
│          ├── ImageEditArea
│          └── BottomArea
└── PresentationView
           ├── PresentationImage
           ├── OptionTable
           └── SettingsMenu
                      ├── LightModeSelector
                      ├── LanguageSelector
                      ├── FontSelector
                      │           └── (fonts)
                      ├── FontSizeSelector
                      └── ColorsPicker
