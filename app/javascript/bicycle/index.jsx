import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory } from 'history';
import App from './components/app';
import Customize from './components/customize';
import NewOrder from './components/new_order';
import Admin from './components/admin';
import AdminBicycleNew from './containers/admin_bicycle_new';
import AdminColorsIndex from './containers/admin_colors_index';
import AdminColorNew from './containers/admin_color_new';
import AdminRimsIndex from './containers/admin_rims_index';
import AdminRimNew from './containers/admin_rim_new';
import AdminWheelsIndex from './containers/admin_wheels_index';
import AdminWheelNew from './containers/admin_wheel_new';
import bicyclesReducer from './reducers/bicycles_reducer';
import colorsReducer from './reducers/colors_reducer';
import rimsReducer from './reducers/rims_reducer';
import wheelsReducer from './reducers/wheels_reducer';
import { reducer as formReducer } from 'redux-form';

//import '../assets/stylesheets/application.scss';

const initialState = {
  bicycles: [],
  colors: [],
  rims: [],
  wheels: [],
  selectedRim: {rim_id: null, color: null},
  selectedWheel: {wheel_id: null, size: null}
};

const reducers = combineReducers({
  bicycles: bicyclesReducer,
  colors: colorsReducer,
  rims: rimsReducer,
  wheels: wheelsReducer,
  form: formReducer,
  selectedRim: rimsReducer,
  selectedWheel: wheelsReducer
});

const store = createStore(reducers, initialState, middlewares);

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path={"/"} exact component={App} />
        <Route path={"/customize"} exact component={Customize} />
        <Route path={"/new_order"} exact component={NewOrder} />
        <Route path={"/admin"} exact component={Admin} />
        <Route path={"/admin/bicycles"} exact component={Admin}/>
        <Route path={"/admin/bicycles/new"} exact component={AdminBicycleNew}/>
        <Route path={"/admin/colors"} exact component={AdminColorsIndex} />
        <Route path={"/admin/colors/new"} exact component={AdminColorNew}/>
        <Route path={"/admin/rims"} exact component={AdminRimsIndex} />
        <Route path={"/admin/rims/new"} exact component={AdminRimNew}/>
        <Route path={"/admin/wheels"} exact component={AdminWheelsIndex} />
        <Route path={"/admin/wheels/new"} exact component={AdminWheelNew}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
