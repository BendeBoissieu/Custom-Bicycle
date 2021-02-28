import { FETCH_RIMS, SELECT_RIM } from '../actions';
export default function (state = [], action) {

  switch(action.type){
    case FETCH_RIMS:
      return action.payload;
    case SELECT_RIM:
      return action.payload;
    default:
      return state;
  }
}
