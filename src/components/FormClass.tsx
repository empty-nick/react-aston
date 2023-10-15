import React, { ReactElement } from 'react'
import Counter from "./Counter.tsx";
import { Tasks } from "./Tasks.tsx";

interface IProps {

}
interface IState {
	text: string;
	isTextReady: boolean;
	counter: number;
	isReactWordExist: boolean;
}
class FormClass extends React.Component<IProps, IState> {
	private readonly inputRef: React.RefObject<HTMLInputElement>;
	constructor(props: object) {
		console.log('Constructor')
		super(props)
		this.state = { text: '', counter: 0, isTextReady: false, isReactWordExist: false };
		this.inputRef = React.createRef()
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
	handleSubmit = () => {
		this.setState({ isTextReady: true })
	}
	handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const isExist = new RegExp(/^([Rr]eact|[Рр]еакт)$/gm).test(event.target.value)
		this.setState({ text: event.target.value, isReactWordExist: isExist })
	}
	clearInput = () => {
		this.setState({ text: '', isTextReady: false })
	}
	focusInput = () => {
		this.inputRef.current?.focus()
	}
	render(): ReactElement {
		console.log('Render')
		const { text, isTextReady, counter, isReactWordExist } = this.state;
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						value={text}
						onInput={this.handleInput}
						ref={this.inputRef}
					/> <br />
					<button type='submit' disabled={isReactWordExist}>Submit</button>
					<button onClick={this.clearInput}>Clear input</button> <br />
					<button onClick={this.focusInput}>Focus on input field</button> <br />

					{(isTextReady && text && !isReactWordExist) && (
						<p>{text}</p>
					)} <br />
				</form>
				<Counter
					decrement={this.decrement}
					increment={this.increment}
					countValue={counter}
				/>
				<Tasks />
			</>
		)
	}
}

export default FormClass