import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange , onButtonSubmit}) => {
    return(
        <div>
            <h1 className = "center">IMAGE DETECTION APP</h1>
            <p className = "f3">
                {'You need to enter url of any images, it will fetch the image'}
            </p>
            <div className = "center">
                <input type = "text" className = "pl0 f4 pa2 w-70 br3" onChange = {onInputChange}  placeholder = "Enter URL of Image"/>
                <button className = "pr0 w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick = {onButtonSubmit}> Detect </button>
            </div>

            <p>By Sammit Pal</p>
        </div>
    );
}

export default ImageLinkForm;