import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

import Logo from './Logo.png';


/**
 * Function that returns the component for image editing area
 * @param {Object} props received parameters
 */
function ImageEditArea(props) {
    const { t } = useTranslation();

    /** Image settings */
    const [image, setImage] = useState(Logo);
    const [zoom, setZoom] = useState(props.info.size);
	const [vPos, setvPos] = useState(props.info.vert_pos);
	const [hPos, sethPos] = useState(parseInt(props.info.horiz_pos));
    const [rotation, setRotation] = useState(props.info.angle);
    
    const canvasRef = useRef(null);
	const imageEl = useRef(null);
    
    useEffect(() => {
		let ctx = canvasRef.current.getContext('2d');
		let [w, h] = [canvasRef.current.width, canvasRef.current.height];
		ctx.clearRect(0, 0, w, h);
        
        /** Transform the canvas according to the image settings */
		ctx.save();
		ctx.translate(hPos, vPos);
		ctx.translate(w/2, h/2);
		ctx.scale(zoom/100, zoom/100);
		ctx.rotate(rotation/180*Math.PI);
        ctx.translate(-w/2, -h/2);
        
        const imageWidth = imageEl.current.width;
        const imageHeight = imageEl.current.height;

        /** Draw the image to the canvas */
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

    /** Function that handles event when image is dragged to the canvas */
	const imageDragEnter = (event) => {
		event.preventDefault();
        let file = event.dataTransfer.files[0];
		if(file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
			event.preventDefault();
		}
    }
    
    /** Function that handles event when image is being dragged over the canvas */
	const imageDragOver = (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "copy"
    }
    
    /** Function that changes the image when an image is dropped over the canvas */
    const imageOnDrop = (event) => {
		event.preventDefault();
		let file = event.dataTransfer.files[0];
		changeImage(file);
    }
    
    /** Function that reads image from a file, and sets it to be the canvas image */
    const changeImage = (file) => {
        if(file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
            let reader = new FileReader()
			reader.onloadend = function(evt) {
                props.addOperation(setImage, reader.result, image);
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
        }
    }

    /** Function that updates the zoom value of the canvas image */
    const updateZoom = (event) => {
        props.addOperation(setZoom, event.target.value, zoom);
        setZoom(event.target.value)
    }

    /** Function that updates the vertical position of the canvas image */
    const updateVerticalPosition = (event, value) => {
        props.addOperation(setvPos, -value, vPos);
        setvPos(-value);
    }

    /** Function that updates the horizontal position of the canvas image */
    const updateHorizontalPosition = (event, value) => {
        props.addOperation(sethPos, value, hPos);
        sethPos(value);
    }

    /** Function that updates the rotation angle of the canvas image */
    const updateRotation = (event) => {
        props.addOperation(setRotation, event.target.value, rotation);
        setRotation(event.target.value);
    }
    

    return (
        <Box>
            <Box style={{ marginLeft:"20%" }}>
                {t("ImageEditArea.DragAndDrop")}&nbsp;&nbsp;

                <Button variant="outlined" component="label" size="small">
                    {t("ImageEditArea.ChooseFile")}
                    <input type="file" accept="image/*" style={{ display: "none" }} onChange={(event) => {changeImage(event.target.files[0])}}/>
                </Button>
            </Box>

			<Box display="flex" style={{"position": "relative", "top":"1rem", "width":"25rem", "height":"25rem" }}>
                <Slider
                    value={-vPos}
                    orientation="vertical"
                    step={1}
                    min={-600}
                    max={600}
                    onChange={(event, value) => updateVerticalPosition(event, value)}
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
                            value={hPos}
                            orientation="horizontal"
                            step={1}
                            min={-600}
                            max={600}
                            onChange={(event, value) => updateHorizontalPosition(event, value)}
                        />
					</Box>

                    <FormControlLabel
                        control={
                            <input
                                value={zoom}
                                onChange={updateZoom}
                                type="number"
                                style={{padding:"0.5rem", borderStyle:"solid", borderRadius:"0.3rem", borderWidth:"thin", borderColor:"grey"}}
                                min={1}
                                max={1000}
                            />
                        }
                        label={t("ImageEditArea.Size")}
                        labelPlacement="start"
                    />

                    <FormControlLabel style={{ marginLeft:"2rem"}}
                        control={
                            <input
                                value={rotation}
                                onChange={updateRotation}
                                type="number"
                                style={{padding:"0.5rem", borderStyle:"solid", borderRadius:"0.3rem", borderWidth:"thin", borderColor:"grey"}}
                                min={0}
                                max={360}
                            />
                        }
                        label={t("ImageEditArea.Angle")}
                        labelPlacement="start"
                    />
				</Box>
			</Box>
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

export default ImageEditArea;
