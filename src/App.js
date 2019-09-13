import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Todo from "./components/TodoComponents/Todo";

let pendingTodo = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
  },
  {
		task: 'Lunch with Kathy',
		id: 1528817077267,
		completed: false
	},
	{
		task: 'Meeting with Boss',
		id: 1528817084389,
		completed: false
	}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			pendingTodo
		};
	}
	render() {
		console.log(this.state.pendingTodo);
		return (
		<div className="App">
			<h2>Welcome to your Todo App!</h2>
			<Todo pendingTodo={this.state.pendingTodo} />
		</div>
		);
	}
}

export default App;
