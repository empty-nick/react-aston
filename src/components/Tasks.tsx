import React, { ReactElement, useState } from "react";

type TodoType = {
	id: number;
	text: string;
	isCompleted: boolean;
}
export function Tasks(): ReactElement {
	const [tasks, setTasks] = useState<TodoType[]>([{ id:1, text: 'Hello', isCompleted: false }])
	const [input, setInput] = useState<string>('')
	const toggleComplete = ({id, isCompleted, text}: TodoType) => {
		// Это чтобы когда происходит toggleComplete порядок элементов не менялся
		setTasks( prevState => prevState.map(taskState => taskState.id === id ? {id, isCompleted: !isCompleted, text} : taskState))
	}
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		if (input)
			setTasks(prevState => [...prevState, { id: new Date().getMilliseconds(), text: input, isCompleted: false }])
		setInput('')
	}
	const removeTask = (id: number) => {
		setTasks(prevState => prevState.filter( taskElement => taskElement.id !== id))
	}
	const removeAllTasks = () => {
		setTasks([])
	}

	return (
		<React.Fragment>
			{tasks.length > 0 ? (
				<ul>
					{tasks.map( todoElement => (
						<li
							key={todoElement.id}
							style={{textDecoration: `${todoElement.isCompleted ? 'line-through red': 'none'}`, userSelect: 'none'}}
						>
							{todoElement.text} &nbsp;
							<button onClick={() => toggleComplete( todoElement)}>
								{todoElement.isCompleted ? 'Mark as completed' : 'Mark as not completed'}
							</button> &nbsp;
							<button onClick={() => removeTask(todoElement.id)}>Delete element</button>
						</li>
					))}
				</ul>
			) : (
				<h2>↓ Tasks list is empty! Add a task ↓</h2>
			)}
			<form onSubmit={submitHandler}>
				<input
					placeholder='Enter new task'
					value={input}
					onInput={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}
				/>
				<button type='submit'>Add task</button> &nbsp;
				<button onClick={removeAllTasks}>Remove all tasks</button>
			</form>
		</React.Fragment>
	)
}
