import { WINDOW_RESIZE, SET_PALETTE, TOGGLE_PAGE01, TOGGLE_PAGE02, TOGGLE_PAGE03 }
  from '../actions/constants';
import { PALETTE, BASE } from './constants';
import Sounds from '../audio';
import * as R from 'ramda';
import { log } from 'ruucm-util';

const initialState = {
  x: 0,
  y: 0,
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  r: 0,
  fill: PALETTE.JAZZY.page01,
  visible: false,
  sound: Sounds.JAZZY.page01
};

/**
 * Triangle action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function page01(state = initialState, action) {
  log('state', state);
  log('action.type(page01)', action.type);
  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getTriangleVertices(action));

    case TOGGLE_PAGE01:
      const visible = !state.visible;
      state.sound.play();
      return R.merge(state, { visible });
    case TOGGLE_PAGE02:
      const visible = false;
      return R.merge(state, { visible });
    case TOGGLE_PAGE03:
      const visible = false;
      return R.merge(state, { visible });

    case SET_PALETTE:
      return R.merge(state, {
        fill: PALETTE[action.palette].page01,
        sound: Sounds[action.palette].page01
      });

    default:
      return state;
  }

}

/**
 * Get the page01 vertices
 * @param  {Number} options.width
 * @param  {Number} options.height
 */
function getTriangleVertices({ width, height }) {

  const r = (width >= height ? width : height) * BASE;
  const x = width / 2;
  const y = height / 2;

  const vertices = [
    [-r, r],
    [r, r],
    [0, -0.8 * r]
  ];

  return { vertices, x, y, r };

}

/**
 * Degree to radians
 * @param  {Number} angle Angle in degrees
 * @return {Number}       Angle in radians
 */
function degToRad(angle) {

  return Math.PI * angle / 180;

};
