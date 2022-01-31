import React from "react";
import Cardlist from "../components/Cardlist";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'

const state = {
    robots: robots,   
    searchfield: ''
}

class App extends React.Component {


    constructor() { //로봇의 이름과 서치필드를 동적으로 연결하기 위한 방법
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
        /* this.setState({robots: robots});
        console.log('componentDidMount'); */

    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        console.log(event.target.value);

    }



    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return ( //리턴값은 한 묶음만 들어갈수있으므로 <div>로 묶으주면된다
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                    
                </div>
            );
        }

        console.log('render');


    }
}

export default App;
