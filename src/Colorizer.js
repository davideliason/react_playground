import React, { Component } from 'react';

class Colorizer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: 'yellow',
			bgColor: ''
		}

		this.colorValue = this.colorValue.bind(this);
		// this.setNewColor = this.setNewColor.bind(this);
	}

	colorValue(e) {
		this.setState({
			color: e.target.value
		});
	}


	render() {
		var colorizerStyle = {
			backgroundColor: this.state.color
		}
		return (
				<div style={colorizerStyle}>
				  <p>Colorizer</p>
				  <input onChange={this.colorValue} placeholder="enter color" />
				  <p>Color: {this.state.color}</p>
				</div>
			);
	}
}

export default Colorizer;