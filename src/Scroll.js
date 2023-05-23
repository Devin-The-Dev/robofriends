// import React from 'react';

// We're going to scroll through just the robots. We want to leave the form up top
// This can be done using props.children because that's where our filtered robots lie
const Scroll = (props) => {
    return (
        // for the style attribute, we're going to nest an object inside a function
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;