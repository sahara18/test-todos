import {fromJS} from 'immutable'

const CHANGE_TEXT = 'forms/CHANGE_TEXT';

const initialState = fromJS({
  text: ''
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return state.set('text', action.payload.text);

    default:
      return state;
  }
};

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    payload: {text}
  };
}