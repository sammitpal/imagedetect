import React from 'react';
import { findByLabelText } from '@testing-library/react';
const FaceRecognition = ( {imageUrl} ) => {
    return(
        <div className = "center ma">
            <br/><br/>
            <div className = "absolute mt2">
                <img id = 'inputimage' src = {imageUrl} alt ='' width = "500px" height = "auto"/>
            </div>
        </div>
    );
}

export default FaceRecognition;