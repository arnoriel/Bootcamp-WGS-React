// src/pages/ClockPage.js
import React, { Component } from "react";
import './clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString('en-US', { hour12: false }),
        });
    }

    render() {
        return (
            <div className="clock-page">
                <p>{this.state.time}</p>
            </div>
        );
    }
}

export default Clock;
