import React, { useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Logo from './Logo.png';


/**
 * Function that returns the component for image editing area
 * @param {Object} props received parameters
 */
function ImageEditArea(props) {
    const [image, setImage] = useState(Logo);
    const [zoom, setZoom] = useState(props.info.size);
	const [vPos, setvPos] = useState(props.info.vert_pos);
	const [hPos, sethPos] = useState(props.info.horiz_pos);
    const [rotation, setRotation] = useState(props.info.angle);
    
    const canvasRef = useRef(null);
	const imageEl = useRef(null);
    
    useEffect(() => {
		let ctx = canvasRef.current.getContext('2d');
		let [w, h] = [canvasRef.current.width, canvasRef.current.height];
		ctx.clearRect(0, 0, w, h);
		
		ctx.save();
		ctx.translate(vPos, hPos);
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

	const imageDragEnter = (event) => {
		event.preventDefault();
        let file = event.dataTransfer.files[0];
		if(file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
			event.preventDefault();
		}
    }
    
	const imageDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    
    const imageOnDrop = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		changeImage(file);
    }
    
    const changeImage = (file) => {
        if(file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
            let reader = new FileReader()
			reader.onloadend = function(evt) {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
        }
    }
    

    return (
        <Box>
            <Box style={{ marginLeft:"20%" }}>
                Drag-n-drop or&nbsp;&nbsp;

                <Button variant="outlined" component="label" size="small">
                    Choose file
                    <input type="file" accept="image/*" style={{ display: "none" }} onChange={(event) => {changeImage(event.target.files[0])}}/>
                </Button>
            </Box>

			<Box display="flex" style={{"position": "relative", "top":"1rem", "width":"25rem", "height":"25rem" }}>
                <Slider
                    value={-hPos}
                    orientation="vertical"
                    step={1}
                    min={-600}
                    max={600}
                    onChange={(event, value) => sethPos(-value)}
                />
                
				<Box>
					<canvas
						width="400rem"
						height="400rem"
                        ref={canvasRef}
                        style={{ borderStyle:"ridge" }}
                        draggable={true}
                        onDragEnter={imageDragEnter}
                        onDrop={imageOnDrop} 
                        onDragOver={imageDragOver}
					/>
					<Box>
                        <Slider
                            value={vPos}
                            orientation="horizontal"
                            step={1}
                            min={-600}
                            max={600}
                            onChange={(event, value) => setvPos(value)}
                        />
					</Box>

                    <FormControlLabel
                        control={
                            <input
                                value={zoom}
                                onChange={(event) => setZoom(event.target.value)}
                                type="number"
                                style={{padding:"0.5rem", borderStyle:"solid", borderRadius:"0.3rem", borderWidth:"thin", borderColor:"grey"}}
                                min={1}
                                max={1000}
                            />
                        }
                        label="Size (%):&nbsp;"
                        labelPlacement="start"
                    />

                    <FormControlLabel style={{ marginLeft:"2rem"}}
                        control={
                            <input
                                value={rotation}
                                onChange={(event) => setRotation(event.target.value)}
                                type="number"
                                style={{padding:"0.5rem", borderStyle:"solid", borderRadius:"0.3rem", borderWidth:"thin", borderColor:"grey"}}
                                min={0}
                                max={360}
                            />
                        }
                        label="Angle (degrees):&nbsp;"
                        labelPlacement="start"
                    />
				</Box>
			</Box>
			<img
                onLoad={() => {setvPos(0);}}
                src={image}
                ref={imageEl}
                style={{"display": "none"}}
            />
		</Box>
    );
    
}

export default ImageEditArea;
