import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import Provider from 'react-redux';
import thunk from 'redux-thunk';

import TodoList from '../containers/TodoList';
import reducers from '../reducers';
import init from '../actions/ListActions';

class TodoAppClinet extends Component {
  constructor(props) {
    super(props);
    this.store =  createStore( reducers);
  }

  render(){
    const props = this.props;

    console.log(this.store);
    console.log("--------------------");
    return(
      <Provider store={this.store}>
        <TodoList {...props} />
      </Provider>
    );
  }
}

export default TodoAppClinet;
