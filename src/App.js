import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// Since I'm not using 'export default', like in './Card', I need to destructure it (add curly brakets)
import { robots } from './robots';
// Import the new font
import './App.css';

class App extends Component {
   
    constructor() {
        super();
        // This is what we call states. They're objects that describes an application. Things inside of this are things that can change
        // These changes are done by using the 'class' and 'this' keywords
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

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

export default App;