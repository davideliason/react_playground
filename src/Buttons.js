import React, {Component} from 'react';

class Buttons extends React.Component {
	render() {
		return (
				<div>
					<p>buttons</p>
					{this.props.data}
				</div>
			);
	}
}

export default Buttons;