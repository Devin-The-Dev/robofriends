import React, { Component } from 'react';
// Add created components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
// Import the new font
import './App.css';

class App extends Component {
   
    constructor() {
        super();
        // This is what we call states. They're objects that describes an application. Things inside of this are things that can change
        // These changes are done by using the 'class' and 'this' keywords
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // We're going to use componentDidMount() to make requests to the JSONPlaceholder API. 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // This collects input from the user
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    
    // This is used to, well, render the information 
    render(){
        // Destructure to make our code cleaner
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // This in case JSONPlaceholder API is getting a lot of traffic
        // We only want the 'loading' to appear iff the length is 0. Well, since 0 also means false, let's just make 0 the true statement
        return !robots.length ?
            <h1>Loading ...</h1> :
            (
                <React.StrictMode>
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                </React.StrictMode>
            )
    }

    // When the page loads it'll run constructor, render, componentDidMount, then render again. This according to React's documentation
}

export default App;