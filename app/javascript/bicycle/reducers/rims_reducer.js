import { FETCH_RIMS } from '../actions';
export default function (state = [], action) {

  switch(action.type){
    case FETCH_RIMS:
    return action.payload;
    default:
      return state;
  }
}
