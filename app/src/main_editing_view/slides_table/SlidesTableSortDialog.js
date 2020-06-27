import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


/**
 * Function that returns the sorting dialog for the slides table
 * @param {Object} props received parameters
 */
function SlidesTableSortDialog(props) {
    const { t } = useTranslation();

    const OLDEST_FIRST = "oldest";
    const NEWEST_FIRST = "newest";
    const ALPHABET_ASC = "alphabet asc";
    const ALPHABET_DESC = "alphabet desc";

    const [sortValue, setSortValue] = useState(OLDEST_FIRST);


    /** Function that sorts the slides from oldest to newest */
    const sortOldestFirst = (slides) => {
        slides.sort((slide1, slide2) => parseFloat(slide1.id) - parseFloat(slide2.id));
        const newSlides = JSON.parse(JSON.stringify(slides));
        return newSlides;
    }

    /** Function that sorts the slides from newest to oldest */
    const sortNewestFirst = (slides) => {
        slides.sort((slide1, slide2) => parseFloat(slide2.id) - parseFloat(slide1.id));
        const newSlides = JSON.parse(JSON.stringify(slides));
        return newSlides;
    }

    /** Function that sorts the slides to ascending alphabetical order */
    const sortAlphabetAsc = (slides) => {
        slides.sort((slide1, slide2) => (slide1.heading > slide2.heading ? 1 : -1));
        const newSlides = JSON.parse(JSON.stringify(slides));
        return newSlides;
    }

    /** Function that sorts the slides to descending alphabetical order */
    const sortAlphabetDesc = (slides) => {
        slides.sort((slide1, slide2) => (slide1.heading < slide2.heading ? 1 : -1));
        const newSlides = JSON.parse(JSON.stringify(slides));
        return newSlides;
    }

    /** Function that sorts the slides according to the chosen sorting value */
    const sortSlides = (slides, newSortValue) => {
        let sortedSlides = [];

        if(newSortValue === OLDEST_FIRST) {
            sortedSlides = sortOldestFirst(slides);
        }
        else if(newSortValue === NEWEST_FIRST) {
            sortedSlides = sortNewestFirst(slides);
        }
        else if(newSortValue === ALPHABET_ASC) {
            sortedSlides = sortAlphabetAsc(slides);
        }
        else if(newSortValue === ALPHABET_DESC) {
            sortedSlides = sortAlphabetDesc(slides);
        }

        return sortedSlides;
    }

    /** Function that changes the chosen sorting value, sorts and updates the slides */
    const changeSorting = (event) => {
        const newSortValue = event.target.value;
        setSortValue(newSortValue);
        const newSlides = sortSlides(props.slides, newSortValue);
        props.updateSlides(newSlides);
    } 

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            <FormControl component="fieldset" style={{margin:"1.0rem"}}>
                <FormLabel component="legend">{t("SlidesTable.Sorting.SortDialogHeader")}</FormLabel>
                <RadioGroup aria-label="sorting" value={sortValue} onChange={changeSorting}>
                    <FormControlLabel value={OLDEST_FIRST} control={<Radio color="primary"/>} label={t("SlidesTable.Sorting.OldestFirstOption")}/>
                    <FormControlLabel value={NEWEST_FIRST} control={<Radio color="primary"/>} label={t("SlidesTable.Sorting.NewestFirstOption")}/>
                    <FormControlLabel value={ALPHABET_ASC} control={<Radio color="primary"/>} label={t("SlidesTable.Sorting.AlphabetAscOption")}/>
                    <FormControlLabel value={ALPHABET_DESC} control={<Radio color="primary"/>} label={t("SlidesTable.Sorting.AlphabetDescOption")}/>
                </RadioGroup>
            </FormControl>
        </Dialog>
    );
}

export default SlidesTableSortDialog;
