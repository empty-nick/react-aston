import React from 'react';

interface IProps{
	decrement: () => void;
	increment: () => void;
	countValue: number;
}
class Counter extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props);
	}
	render() {
		return (
			<div>
				<button onClick={this.props.decrement}>Decrease</button>
				<button onClick={this.props.increment}>Increase</button>
				<h1>{this.props.countValue}</h1>
			</div>
		);
	}
}

export default Counter;