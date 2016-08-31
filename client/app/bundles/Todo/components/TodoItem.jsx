import React, { PropTypes } from 'react';
import Button from 'react-bootstrap';

import { removeTodo } from '../actions/ListActions';

export default class TodoItem extends React.Component {

  toggelTodo = (todo) => {
    this.props.dispatch(removeTodo(todo));
  }

  render() {
    return(
      <div>
        <div>{this.props.todo.title}
          <Button onClick={this.toggelTodo(this.props.todo)}>Done</Button>
        </div>
      </div>
  );
  }
}
