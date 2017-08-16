import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import BarChart from './Components/BarChart';
import StackedBarChart from './Components/StackedBarChart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>React-d3-chart-graphs examples</h2>
                </div>
                <h1>Example Bar chart</h1>
                <BarChart />
                <h1>Example Stacked bar chart</h1>
                <StackedBarChart/>
            </div>
        );
    }
}

export default App;