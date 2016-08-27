import React, { PropTypes } from 'react';
import TodoListComponent from '../components/TodoListComponent';

export default class TodoList extends React.Component {
  render() {
    return(
      <TodoListComponent todos={this.props.todos} />
    );
  }
}
