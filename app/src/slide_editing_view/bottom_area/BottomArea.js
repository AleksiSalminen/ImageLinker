import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';


/**
 * Function that returns the bottom area component
 * @param {Object} props received parameters
 */
function BottomArea(props) {
    const { t } = useTranslation();

    return (
        <div>
            <Button variant="contained" color="primary" style={{}}>{t("BottomArea.SaveButton")}</Button>
            <Button variant="contained" color="secondary" style={{ marginLeft:"40%" }}>{t("BottomArea.DeleteButton")}</Button>
            <Button variant="contained" style={{ marginLeft:"40%" }}>{t("BottomArea.CancelButton")}</Button>
        </div>
    );
}

export default BottomArea;
