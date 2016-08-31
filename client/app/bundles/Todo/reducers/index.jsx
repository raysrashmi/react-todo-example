import _ from "lodash";
import {REMOVE_ITEM} from '../actions/ListActions';

const initialSate = {
  todos: []
}

function ListReducer(state=initialSate, action) {
  switch(action.type) {
    case REMOVE_ITEM:
      let todos = _.without(state.todos, action.todo);
      return  _.assign(state, {todos: todos});
  }
}
export default ListReducer;
