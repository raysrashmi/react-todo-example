import React, { PropTypes } from 'react';
import TodoItem from '../components/TodoItem';

export default class TodoListComponent extends React.Component {
  render() {
    const items = this.props.todos.map((todo) => {
      return <TodoItem todo={todo} key={todo.id}/>;
    });

    return(
      <div className="todos-container">
        {items}
      </div>
    );
  }
}

