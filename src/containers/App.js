import React, { useState, useEffect } from 'react';
// Add created components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary';
// Import the new font
import './App.css';

function App() {
    
    // We're going to create a hook
    // Let's have 'robots be our state, and setRobots to be out function to change the robots
    // This seems to be much like a shorthand way for fields, getters, and setters
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
        // There needs to be an array (even empty) in order to prevent uncessassary fetchings
    }, [count]) //Only run if count changes

    // This collects input from the user
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    // This first part is in case JSONPlaceholder API is getting a lot of traffic
    // We only want the 'loading' to appear iff the length is 0. Well, since 0 also means false, let's just make 0 the true statement
    return !robots.length ?
        <h1>Loading ...</h1> :
        (
            <React.StrictMode>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <button onClick={() =>  setCount(count + 1) }>Click Me!</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </React.StrictMode>
        )

    // When the page loads it'll run constructor, render, componentDidMount, then render again. This according to React's documentation
}

export default App;