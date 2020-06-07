import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


/**
 * Function that returns the dialog for choosing and opening a project
 * @param {Object} props received parameters
 */
function OpenProjectDialog(props) {
    
    if(props.open) {
        return (
            <Dialog onClose={() => {props.changeSelectedProject(null)}} aria-labelledby="Open project dialog" open={true}>
                <DialogTitle id="open-project-title">Open project</DialogTitle>
                <List>
                    {props.projects.map((project) => (
                        <ListItem button onClick={() => props.changeSelectedProject(project.id)} key={project.id}>
                            <ListItemText primary={project.name} />
                        </ListItem>
                    ))}
                </List>
            </Dialog>
        );
    }
    else {
        return (<div></div>);
    }
}

export default OpenProjectDialog;
