import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';


/**
 * Function that returns the sorting button for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableSortButton(props) {
    const { t } = useTranslation();

    return (
        <Button variant="outlined">
            {t("SlidesTable.SortButton")}
        </Button>
    );
}

export default SlidesTableSortButton;
