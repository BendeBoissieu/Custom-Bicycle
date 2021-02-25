import { FETCH_WHEELS } from '../actions';
export default function (state = [], action) {

  switch(action.type){
    case FETCH_WHEELS:
    return action.payload;
    default:
      return state;
  }
}
