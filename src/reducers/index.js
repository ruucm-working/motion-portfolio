import { combineReducers } from 'redux';
import core from './core-reducer';
import triangle from './triangle-reducer';
import circle from './circle-reducer';
import square from './square-reducer';
import page01 from './page01-reducer';

const rootReducer = combineReducers({
  core,
  triangle,
  circle,
  square,
  page01,
});

export default rootReducer;
