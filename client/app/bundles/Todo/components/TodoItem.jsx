import React, { PropTypes } from 'react';

export default class TodoItem extends React.Component {
  render() {
    return(
      <div>
        <div>{this.props.todo.title}
          <span>Done</span>
        </div>
      </div>
  );
  }
}
