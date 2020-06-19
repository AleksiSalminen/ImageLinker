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
        
        const imageHeight = imageEl.current.height;
        const heightRatio = imageHeight / h;
		ctx.drawImage(imageEl.current, 0, (h/2 - (heightRatio * imageHeight / 2)), w, (heightRatio * imageHeight));
		ctx.restore();
    });
    

    return (
        <Box>
            <Box style={{ marginLeft:"20%" }}>
                Drag-n-drop or&nbsp;&nbsp;

                <Button variant="outlined" size="small">
                    Choose file
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
			<img onLoad={() => {setvPos(0);}} src={image} ref={imageEl} style={{"display": "none"}}/>
		</Box>
    );
    
}

export default ImageEditArea;
