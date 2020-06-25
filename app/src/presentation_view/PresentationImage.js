import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';

import Logo from './Logo.png';


/**
 * Function that returns the component for image editing area
 * @param {Object} props received parameters
 */
function PresentationImage(props) {

    const settings = props.slide.image;

    const [image, setImage] = useState(Logo);
    const [zoom, setZoom] = useState(settings.size);
	const [vPos, setvPos] = useState(settings.vert_pos);
	const [hPos, sethPos] = useState(settings.horiz_pos);
    const [rotation, setRotation] = useState(settings.angle);
    
    const canvasRef = useRef(null);
	const imageEl = useRef(null);
    
    useEffect(() => {
		let ctx = canvasRef.current.getContext('2d');
		let [w, h] = [canvasRef.current.width, canvasRef.current.height];
		ctx.clearRect(0, 0, w, h);
		
		ctx.save();
		ctx.translate(hPos, vPos);
		ctx.translate(w/2, h/2);
		ctx.scale(zoom/100, zoom/100);
		ctx.rotate(rotation/180*Math.PI);
        ctx.translate(-w/2, -h/2);
        
        const imageWidth = imageEl.current.width;
        const imageHeight = imageEl.current.height;

        if(imageWidth >= imageHeight) {
            const ratio = imageHeight / imageWidth;
            ctx.drawImage(imageEl.current, 0, (h/2 - (ratio*h/2)), w, (ratio * h));
        }
        else {
            const ratio = imageWidth / imageHeight;
            ctx.drawImage(imageEl.current, (w/2 - (ratio*w/2)), 0, (ratio * w), h);
        }

        ctx.restore();
    });
    

    return (
        <Box>
            <canvas
                width="550rem"
                height="550rem"
                ref={canvasRef}
                style={{ borderStyle:"ridge" }}
            />

			<img
                onLoad={() => {setvPos(0);}}
                alt=""
                src={image}
                ref={imageEl}
                style={{"display": "none"}}
            />
		</Box>
    );
    
}

export default PresentationImage;
