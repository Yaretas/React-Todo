import React from 'react';


class Todo extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        console.log(this.props.pendingTodo);
        return this.props.pendingTodo.map((todo) => (
            <h2>{ todo.task}</h2>
        ));
    }
}

export default Todo;