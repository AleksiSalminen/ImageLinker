import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


const projects = ['project1', 'project2'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="Open project dialog" open={open}>
            <DialogTitle id="open-project-title">Open project</DialogTitle>
            <List>
                {projects.map((project) => (
                    <ListItem button onClick={() => handleListItemClick(project)} key={project}>
                        <ListItemText primary={project} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}

function OpenProjectDialog() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(projects[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>Open</Button>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}

export default OpenProjectDialog;
