import React, { ReactElement } from 'react'
import Counter from "./Counter.tsx";

interface IProps {

}
interface IState {
	text: string;
	isTextReady: boolean;
	counter: number;
}
class FormClass extends React.Component<IProps, IState> {
	constructor(props: object) {
		console.log('Constructor')
		super(props)
		this.state = { text: '', counter: 0, isTextReady: false };
	}
	// componentWillReceiveProps() {
	// 	console.log('componentWillReceiveProps')
	// }
	// componentWillMount() {
	// 	console.log('componentWillMount')
	// }
	static getDerivedStateFromProps(){
		console.log('getDerivedStateFromProps')
		return {}
	}
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	shouldComponentUpdate(): boolean {
		console.log('shouldComponentUpdate')
		return true
	}
	getSnapshotBeforeUpdate() {
		console.log('getSnapshotBeforeUpdate')
		return null
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	componentDidCatch() {
		console.log('componentDidCatch')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	decrement = () =>{
		this.setState(prevState => ({
			counter: prevState.counter - 1
		}))
	}
	increment = () =>{
		this.setState(prevState => ({
			counter: prevState.counter + 1
		}))
	}
	handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		this.setState({ isTextReady: true })
	}
	handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ text: event.target.value })
	}
	clearInput = () => {
		this.setState({ text: '', isTextReady: false })
	}
	render(): ReactElement {
		console.log('Render')
		const { text, isTextReady, counter } = this.state;
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={text}
						onInput={this.handleInput}
					/> <br />
					<button type='submit'>Submit</button>
					<button onClick={this.clearInput}>Hide text</button> <br />

					{(isTextReady && text) && (
						<p>{text}</p>
					)} <br />
				</form>
				<Counter
					decrement={this.decrement}
					increment={this.increment}
					countValue={counter}
				/>
			</>
		)
	}
}

export default FormClass