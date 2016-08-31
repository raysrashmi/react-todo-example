export const REMOVE_ITEM="remove_item";

export default function removeTodo(todo) {
  return function(dispatch) {
    dispatch({
      type: REMOVE_ITEM,
      todo: todo
    })
  }
}
