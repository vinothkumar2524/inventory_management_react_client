import React from 'react';

const PopUp = (props) => {
    
    return(
        <div className="absolute top-20 ml-72 bg-yellow-200 w-1/3 h-2/3" >
            <div>
                <span>This is the popup</span>
            </div>
            <div>
                {props.content}
            </div>
        </div>
    )
}

export default PopUp;