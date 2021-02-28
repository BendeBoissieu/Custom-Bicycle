export const FETCH_BICYCLES = 'FETCH_BICYCLES';
export const FETCH_COLORS = 'FETCH_COLORS';
export const COLOR_CREATED = 'COLOR_CREATED';
export const FETCH_RIMS = 'FETCH_RIMS';
export const RIM_CREATED = 'RIM_CREATED';
export const FETCH_WHEELS = 'FETCH_WHEELS';
export const WHEEL_CREATED = 'WHEEL_CREATED';
export const BICYCLE_CREATED = 'BICYCLE_CREATED';
export const SELECT_WHEEL = 'SELECT_WHEEL';
export const SELECT_RIM = 'SELECT_RIM';


const ROOT_URL = '/api/v1';

export function fetchBicycles() {
  const promise = fetch(`${ROOT_URL}/bicycles`)
    .then(response => response.json());
  return {
    type: FETCH_BICYCLES,
    payload: promise
  }
}

export function fetchColors() {
  const promise = fetch(`${ROOT_URL}/colors`)
    .then(response => response.json());
  return {
    type: FETCH_COLORS,
    payload: promise
  }
}

export function fetchRims() {
  const promise = fetch(`${ROOT_URL}/rims`)
    .then(response => response.json());
  return {
    type: FETCH_RIMS,
    payload: promise
  }
}

export function fetchWheels() {
  const promise = fetch(`${ROOT_URL}/wheels`)
    .then(response => response.json());
  return {
    type: FETCH_WHEELS,
    payload: promise
  }
}

export function createColor(body, callback) {
  const request = fetch(`${ROOT_URL}/colors`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
  .then(callback);
  return {
    type: COLOR_CREATED,
    payload: request
  };
}

export function createRim(body, callback) {
  const request = fetch(`${ROOT_URL}/rims`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
  .then(callback);
  return {
    type: RIM_CREATED,
    payload: request
  };
}

export function createWheel(body, callback) {
  const request = fetch(`${ROOT_URL}/wheels`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
  .then(callback);
  return {
    type: WHEEL_CREATED,
    payload: request
  };
}

export function createBicycle(body, callback) {
  const request = fetch(`${ROOT_URL}/bicycles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json(),
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.',
      });
    }
  )
  .then(callback);
  return {
    type: BICYCLE_CREATED,
    payload: request
  };
}

export function selectWheel(value) {
  return{
    type: SELECT_WHEEL,
    payload: value
  }
}

export function selectRim(value) {
  return{
    type: SELECT_RIM,
    payload: value
  }
}
