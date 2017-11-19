import {fromJS} from 'immutable';

const ADD_TODO = 'list/ADD_TODO';
const CHANGE_TODO_STATUS = 'list/CHANGE_TODO_STATUS';

const initialState = fromJS([
  {text: 'get up', completed: false},
  {text: 'have breakfast', completed: false},
  {text: 'go to school', completed: false}
]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.push(fromJS({
        text: action.payload.text,
        completed: false
      }));

    case CHANGE_TODO_STATUS:
      return state.updateIn(
        [action.payload.index, 'completed'],
        completed => !completed
      );

    default:
      return state;
  }
};

export function addTodo() {
  return (dispatch, getState) => {
    const text = getState().form.get('text');

    dispatch({
      type: ADD_TODO,
      payload: {text}
    });
  };
}

export function changeTodoStatus(index) {
  return {
    type: CHANGE_TODO_STATUS,
    payload: {index}
  };
}