import React, { Component } from "react";
import Name from "./Name";


class List extends Component {
    constructor(props){
        super(props);

        // state variable to keep track of counts
        this.state = {
            count: 0
        }
    }

    // a handler to run on click events
    countHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <>
                <p>The button has been clicked {this.state.count} times</p>
                <p>
                    {/* a button to call our handler */}
                    <button onClick={this.countHandler}>Click me!</button>
                </p>
                <Name name={"Brendan"} handler={this.countHandler}/>
                <Name name={"Steve"} handler={this.countHandler}/>
                <Name name={"Lia"} handler={this.countHandler}/>
            </>
        )
    }
}


export default List;