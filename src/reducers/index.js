import { combineReducers } from "redux";
import { RECEIVE_MEMES, NEW_MEME } from "../actions";
function memes(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}
function personalisedMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme];
    default:
      return state;
  }
}
const rootReducer = combineReducers({ memes, personalisedMemes });

export default rootReducer;
