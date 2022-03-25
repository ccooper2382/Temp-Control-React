import './App.css';
import Temperature from "./Components/temperature";
import React, {Component} from 'react';

class App extends Component {
    state = {
        setting: 15
    }

    handleIncrement = () => {
        let number = this.state.setting;
        let newNumber = number + 1;
        this.setState({setting: newNumber})

    }


    handleDecrement = () => {
        let number = this.state.setting;
        let newNumber = number - 1;
        this.setState({setting: newNumber})
    }

    render() {
        return (
            <div className="w-60 mr-auto ml-auto text-center">
                <Temperature onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} setting={this.state.setting}/>
            </div>
        );
    }

}


export default App;