// Import the component extension from the React class
import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    // Use Render to display things
    render() {
        // Return what you want to the display
        // If it's going to be multiple lines, wrap it in parantheses
        return (
            <div className='f1 tc'>
                <h2>Hello World!</h2>
                <p>Welcome to React</p>
                {/* Lets use that prop we made in index.js */}
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;