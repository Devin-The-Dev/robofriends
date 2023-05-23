import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// Since I'm not using 'export default', like in './Card', I need to destructure it (add curly brakets)
// import { robots } from './robots';
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

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        // This in case JSONPlaceholder API is getting a lot of traffic
        if (this.state.robots.length === 0 ) {
            return <h1>Loading ...</h1>;
        } else {
            return(
                <React.StrictMode>
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <CardList robots={filteredRobots} />
                    </div>
                </React.StrictMode>
            )
        }
    }

    // When the page loads it'll run constructor, render, componentDidMount, then render again. This according to React's documentation
}

export default App;