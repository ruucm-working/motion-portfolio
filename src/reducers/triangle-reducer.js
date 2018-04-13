import { WINDOW_RESIZE, TOGGLE_TRIANGLE, SET_PALETTE }
  from '../actions/constants';
import { PALETTE, BASE } from './constants';
import Sounds from '../audio';
import * as R from 'ramda';

const initialState = {
  x: 0,
  y: 0,
  vertices: [
    [0, 0],
    [0, 0],
    [0, 0]
  ],
  r: 0,
  fill: PALETTE.JAZZY.triangle,
  visible: true,
  sound: Sounds.JAZZY.triangle
};

/**
 * Triangle action handlers
 * @param  {Object} state
 * @param  {Object} action
 */
export default function triangle(state = initialState, action) {

  switch (action.type) {

    case WINDOW_RESIZE:
      return R.merge(state, getTriangleVertices(action));

    case TOGGLE_TRIANGLE:
      const visible = !state.visible;
      state.sound.play();
      return R.merge(state, { visible });

    case SET_PALETTE:
      return R.merge(state, {
        fill: PALETTE[action.palette].triangle,
        sound: Sounds[action.palette].triangle
      });

    default:
      return state;
  }

}

/**
 * Get the triangle vertices
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
