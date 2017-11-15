import React, { Component } from 'react';

class DisplayCounter extends Component {
    render() {
        return (
            <div style={{backgroundColor:"maroon",padding:"5%"}} className="container-fluid">
            <div className="row justify-content-md-center">
                    <h1 style={{color:"white"}}>Muhazzib's First React-Counter App</h1>
            </div>
            <div className="row justify-content-md-center">
                    
            <h4 style={{fontWeight:"bold",border:"2px solid white",backgroundColor:"white",borderRadius:"10px",padding:"10px"}}>{this.props.counter}</h4>
            </div>
            <div className="row justify-content-md-center">


                    <button onClick={this.props.increment} style={this.props.incremdisplay} className="btn btn-success">+</button>
                    <button onClick={this.props.decrement} style={this.props.decremdisplay} className="btn btn-danger">-</button>
            </div>

            <div className="row justify-content-md-center">

                  <p style={this.props.timerdisplay}>{this.props.text}</p>
            </div>
            </div>
            
        )
    }
}

export default DisplayCounter