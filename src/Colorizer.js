import React, { Component } from 'react';

class Colorizer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: '',
			bgColor: ''
		}

		this.colorValue = this.colorValue.bind(this);
		this.setBGColor = this.setBGColor.bind(this);
	}

	colorValue(e) {
		this.setState({
			color: e.target.value
		});
	}

	setBGColor(e) {
		this.setState({
			bgColor:this.state.color
		});
		this._input.value = "";
		this._input.focus();

		e.preventDefault();
	}


	render() {
		var colorizerStyle = {
			backgroundColor: this.state.bgColor,
			width: 500,
			height: 480,
			padding: 0

		}

		var self = this;

		return (
				<div style={colorizerStyle}>
				  <form onSubmit={this.setBGColor}>
				    <input 
				         ref={
				         	function(el) {
				         		self._input = el;
				         	}
				         } 
				    	 onChange={this.colorValue}
				    	 placeholder="enter new color">
				    </input>
				    <button type="submit">Enter</button>
				  </form>
				</div>
			);
	}
}

export default Colorizer;