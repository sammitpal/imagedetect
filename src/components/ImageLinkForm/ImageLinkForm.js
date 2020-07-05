import React from 'react';
const ImageLinkForm = ({ onInputChange , onButtonSubmit}) => {
    return(
        <div>
            <h1 className = "center">IMAGE DETECTION APP</h1>
            <p className = "f3">
                {'You need to enter url of any images, it will fetch the image'}
            </p>
            <div className = "center">
                <input type = "text" className = "f4 pa2 w-30 br3" onChange = {onInputChange}  placeholder = "Enter URL of Image"/>
                <button className = "w-10 grow f4 link ph3 pv2 dib white bg-light-purple" onClick = {onButtonSubmit}> Detect </button>
            </div>

            <p>By Sammit Pal</p>
        </div>
    );
}

export default ImageLinkForm;