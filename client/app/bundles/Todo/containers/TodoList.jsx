import React, { PropTypes } from 'react';
import  connect from  'react-redux';

import TodoListComponent from '../components/TodoListComponent';
import { removeTodo } from '../actions/ListActions';

export class TodoList extends React.Component {

  render() {
    console.log(this.store);
    return(
      <TodoListComponent todos={this.props.todos} />
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     removeTodo: () => dispatch(removeTodo())
//   };
// }

export default TodoList;
