import { FETCH_WHEELS, SELECT_WHEEL } from '../actions';
export default function (state = [], action) {

  switch(action.type){
    case FETCH_WHEELS:
      return action.payload;
    case SELECT_WHEEL:
      return action.payload;
    default:
      return state;
  }
}
