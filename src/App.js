import React, {Component} from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import SearchLogic from './SearchLogic';

const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {


    constructor() {
        super()
        this.state= {
            robots:robots,
            searchfield:''
        }
    
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        console.log(event.target.value);
        

    }



    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return ( //리턴값은 한 묶음만 들어갈수있으므로 <div>로 묶으주면된다
        <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange ={this.onSearchChange}/>
        <Cardlist robots ={filteredRobots}/>
        </div>
    );
    }
}

export default App;
