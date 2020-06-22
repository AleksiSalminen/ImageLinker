import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHotkeys } from 'react-hotkeys-hook';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the bottom area component
 * @param {Object} props received parameters
 */
function BottomArea(props) {
    const { t } = useTranslation();

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

    const saveChanges = () => {
        alert("Saved");
    }

    const deleteSlide = () => {
        alert("Deleted");
    }

    const cancelChanges = () => {
        alert("Canceled");
    }

    return (
        <div>
            <Button variant="contained" onClick={saveChanges} color="primary" style={{}}>{t("BottomArea.SaveButton")}</Button>
            <Button variant="contained" onClick={deleteSlide} color="secondary" style={{ marginLeft:"40%" }}>{t("BottomArea.DeleteButton")}</Button>
            <Button variant="contained" onClick={cancelChanges} style={{ marginLeft:"40%" }}>{t("BottomArea.CancelButton")}</Button>
        </div>
    );
}

export default BottomArea;
