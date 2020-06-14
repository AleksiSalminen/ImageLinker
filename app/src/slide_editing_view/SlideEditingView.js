import React from 'react';


/**
 * Function that returns the slide editing view
 * @param {Object} props received parameters
 */
function SlideEditingView(props) {
    
    return (
        <div>
            <p>{props.selectedSlide.heading}</p>
        </div>
    );
}

export default SlideEditingView;
