import { FETCH_BICYCLES } from '../actions';
export default function (state = [], action) {
  switch(action.type){
    case FETCH_BICYCLES:
    return action.payload;
    default:
      return state;
  }
}
