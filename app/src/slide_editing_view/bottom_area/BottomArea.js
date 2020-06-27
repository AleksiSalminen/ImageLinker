import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHotkeys } from 'react-hotkeys-hook';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


/**
 * Function that returns the bottom area component
 * @param {Object} props received parameters
 */
function BottomArea(props) {
    const { t } = useTranslation();

    const [dialogOpen, setDialogOpen] = useState(false);

    const setActiveView = props.activeViewSettings.setActiveView;
    const MAIN_EDITING_VIEW = props.activeViewSettings.MAIN_EDITING_VIEW;

    useHotkeys('ctrl+s', (event) => {
        event.preventDefault();
        saveChanges();
    });

    useHotkeys('ctrl+d', (event) => {
        event.preventDefault();
        deleteSlide();
    });

    useHotkeys('ctrl+c', (event) => {
        event.preventDefault();
        cancelChanges();
    });

    /** Function that saves the changes made to the slide */
    const saveChanges = () => {
        alert("Saved");
    }

    /** Function that deletes the slide */
    const deleteSlide = () => {
        alert("Deleted");
    }

    /** Function that cancels the changes made to the slide, and
    activates the main editing view */
    const cancelChanges = () => {
        handleCancelDialogClose();
        props.emptyHistory();
        setActiveView(MAIN_EDITING_VIEW);
        props.selectSlide(null);
    }

    /** Function that sets the cancel alert dialog open */
    const alertCancel = () => {
        setDialogOpen(true);
    }

    /** Function that closes the cancel alert dialog */
    const handleCancelDialogClose = () => {
        setDialogOpen(false);
    }


    return (
        <div>
            <Button variant="contained" onClick={saveChanges} color="primary" style={{}}>{t("BottomArea.SaveButton")}</Button>
            
            <Button variant="contained" onClick={deleteSlide} color="secondary" style={{ marginLeft:"40%" }}>{t("BottomArea.DeleteButton")}</Button>
            
            <Button variant="contained" onClick={alertCancel} style={{ marginLeft:"40%" }}>{t("BottomArea.CancelButton")}</Button>
            <Dialog
                open={dialogOpen}
                onClose={handleCancelDialogClose}
                aria-labelledby="cancel-alert-dialog"
            >
                <DialogTitle>{t("BottomArea.CancelChanges")}</DialogTitle>
                <DialogActions>
                    <Button onClick={cancelChanges} variant="contained" color="default">
                        {t("BottomArea.Yes")}
                    </Button>
                    <Button onClick={handleCancelDialogClose} variant="contained" color="primary" autoFocus>
                        {t("BottomArea.No")}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default BottomArea;
