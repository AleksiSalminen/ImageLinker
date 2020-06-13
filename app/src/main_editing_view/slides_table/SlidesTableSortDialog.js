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


    const sortOldestFirst = (slides) => {
        alert(1);
    }

    const sortNewestFirst = (slides) => {
        alert(2);
    }

    const sortAlphabetAsc = (slides) => {
        alert(3);
    }

    const sortAlphabetDesc = (slides) => {
        alert(4);
    }

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

    const changeSorting = (event) => {
        const newSortValue = event.target.value;
        setSortValue(newSortValue);
        const newSlides = sortSlides(props.slides, newSortValue);
        props.updateSlides(newSlides);
    } 

    return (
        <Dialog open={props.open} onClose={props.closeDialog}>
            <FormControl component="fieldset" style={{margin:"1.0rem"}}>
                <FormLabel component="legend">Table sorting options</FormLabel>
                <RadioGroup aria-label="sorting" value={sortValue} onChange={changeSorting}>
                    <FormControlLabel value={OLDEST_FIRST} control={<Radio color="primary"/>} label="Oldest first"/>
                    <FormControlLabel value={NEWEST_FIRST} control={<Radio color="primary"/>} label="Newest first" />
                    <FormControlLabel value={ALPHABET_ASC} control={<Radio color="primary"/>} label="Ascending alphabetical order for heading" />
                    <FormControlLabel value={ALPHABET_DESC} control={<Radio color="primary"/>} label="Descending alphabetical order for heading" />
                </RadioGroup>
            </FormControl>
        </Dialog>
    );
}

export default SlidesTableSortDialog;
