import React from 'react';
import "./Modal.css"

function BackgraundDrop(props) {

    return(
        <div className='backgraund' onClick={props.onClose}/>
    );
    
}

export default BackgraundDrop;