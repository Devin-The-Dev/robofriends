// We're to import 2 things from the same module
// We need React as well because we're using JSX instead of HTML
import React, { Component } from 'react';

// We're going to uses classes because they're more universally used in other languages and hooks are only React specific
class Card extends Component {
    // Use Render to display things
    render() {
        // This isn't needed, but it'll make our code cleaner
        const { name, email, id } = this.props;
        // Return what you want to the display
        // If it's going to be multiple lines, wrap it in parantheses
        return (
            // This is the 'text-center, background, display (inline block), border, padding, margin, grow in hover, border-width, shadow'
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                {/* We're going to use the Robohash API to generate robot photos */}
                <img alt='robots' src={`https://robohash.org/${id}?200x200`} />

                <div>
                    {/* Lets use those props we made in index.js */}
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
    
    
}

// Like creating a module in Node, we need to export our function
export default Card;