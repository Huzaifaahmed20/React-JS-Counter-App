import React, { Component } from 'react';

import DisplayCounter from "./counterdisplay"
import './App.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            warning: 0,
            display: "inline",
            timer: 31,
            timerdisplay: "none"
        }
        this.counterincre = this.counterincre.bind(this)
        this.counterdecre = this.counterdecre.bind(this)

    }



    counterincre = () => {
        console.log("Increment");
        if (this.state.counter === 10) {
            this.setState({
                warning: this.state.warning + 1,
            })
            console.log(this.state.warning)
            if (this.state.warning === 2) {

                this.setState({
                    counter: 0,
                    warning: 0
                })
                alert("You have reached the limit, Please wait for 30 seconds");
                this.setState({
                    display: "none"
                })
                setTimeout(() => {
                    this.setState({
                        display: "inline"
                    })
                }, 31000)

                let inter = setInterval(() => {
                    this.setState({
                        timerdisplay: "block"
                    })
                    this.setState({
                        timer: this.state.timer - 1
                    })
                    if (this.state.timer === 0) {
                        this.state.timer = 31
                        clearInterval(inter);
                        this.setState({
                            timerdisplay: "none"
                        })
                    }
                }, 1000)
            }
            else {
                if (this.state.warning == 0) {
                    alert("Dont exceed more than 10, You have now two chances left")
                }
                else {
                    alert("Dont exceed more than 10, You have a last chance")

                }
            }
        }
        else {
            this.setState({
                counter: this.state.counter + 1
            })
        }
    }

    counterdecre = () => {
        console.log("Increment");
        if (this.state.counter === 0) {
            this.setState({
                warning: this.state.warning + 1,
            })

            console.log(this.state.warning)
            if (this.state.warning === 2) {

                this.setState({
                    counter: 0,
                    warning: 0
                })
                alert("You have crossed the limit, Please wait for 30 seconds")
                this.setState({
                    display: "none"
                })
                setTimeout(() => {
                    this.setState({
                        display: "inline"
                    })
                }, 31000)

                let inter = setInterval(() => {
                    this.setState({
                        timerdisplay: "block"
                    })
                    this.setState({
                        timer: this.state.timer - 1
                    })
                    if (this.state.timer === 0) {
                        this.state.timer = 31
                        clearInterval(inter);
                        this.setState({
                            timerdisplay: "none"
                        })
                    }
                }, 1000)

            }
            else {
                if (this.state.warning == 0) {
                    alert("Dont go below 0, You have now two chances left")
                }
                else {
                    alert("Dont go below 0, You have a last chance")

                }
            }
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }
    render() {
        return (

            <div>

                <DisplayCounter counter={this.state.counter} increment={this.counterincre} decrement={this.counterdecre} incremdisplay={{ display: this.state.display, padding: "10px 20px", margin: "0% 1%", fontWeight: "bold", fontSize: "26px" }} decremdisplay={{ display: this.state.display, padding: "10px 22px", margin: "0% 1%", fontWeight: "bold", fontSize: "26px" }} text={this.state.timer} timerdisplay={{ display: this.state.timerdisplay ,color:"white",marginTop:"4px"}} />

            </div>
        )
    }
}
export default Counter;