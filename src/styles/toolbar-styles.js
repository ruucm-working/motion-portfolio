import * as R from 'ramda';
import { log } from 'ruucm-util';

/**
 * Get fill based on state
 * @param  {Boolean} isVisible
 * @return {String}  Fill colour
 */
function getFill(isVisible, fill) {
  return isVisible ? fill : '#DCDCDC';
}

/**
 * Get the size of buttons
 * @param  {Number} width
 * @return {Number} size
 */
function getSize(width) {

  if (width < 400) {
    return 20;
  } else if (width >= 400 & width < 550) {
    return 16;
  } else if (width >= 550 & width < 750) {
    return 8;
  } else if (width >= 750 & width < 1000) {
    return 6;
  } else if (width >= 1000 & width < 1200) {
    return 4;
  } else {
    return 3;
  }

}

const base = (s) => ({
  cursor: 'pointer',
  width: s/2 + 'vw',
  height: s/2 + 'vw',
  transition: 'width ease-in-out 300ms, height ease-in-out 300ms'
});

const circleStyles = (s, circle, fill) => R.merge(base(s), {
  backgroundColor: getFill(circle, fill)
});

const triangleStyles = (s, triangle, fill) => R.merge(base(s), {
  backgroundColor: getFill(triangle, fill)
});

const squareStyles = (s, square, fill) => R.merge(base(s), {
  backgroundColor: getFill(square, fill)
});

const page01Styles = (s, page01, fill) => R.merge(base(s), {
  backgroundColor: getFill(page01, fill)
});
const page02Styles = (s, page02, fill) => R.merge(base(s), {
  backgroundColor: getFill(page02, fill)
});
const page03Styles = (s, page03, fill) => R.merge(base(s), {
  backgroundColor: getFill(page03, fill)
});



const aboutButtonStyles = (s, width) => {
  return {
    cursor: 'pointer',
    width: (width < 400 ? s : 2 * s) + 'vw',
    height: s + 'vw',
    transition: 'width ease-in-out 300ms, height ease-in-out 300ms',
    letterSpacing: '0.05em',
    textAnchor: 'middle',
    fontSize: width < 400 ? 5 : 10,
    fill: '#fff',
  };
};

const containerStyles = (s, width) => ({
  margin: width < 550 ? '0 auto' : 0
});

const toolbarStyles = (s, width) => ({
  paddingLeft: width < 550 ? '1rem' : '2rem',
  paddingRight: width < 550 ? '1rem' : '2rem'
});

export function getStyles({width, circle, triangle, square, page01, page02, page03, fills}) {
  const s = getSize(width);
  log('s', s);
  log('width', width);
  log('page01', page01);
  log('page03', page03);
  log('page01Styles', page01Styles(s, page01, fills.page01));
  log('page03Styles', page03Styles(s, page03, fills.page03));

  return {
    circleStyles: circleStyles(s, circle, fills.circle),
    triangleStyles: triangleStyles(s, triangle, fills.triangle),
    squareStyles: squareStyles(s, square, fills.square),
    page01Styles: page01Styles(s, page01, fills.page01),
    page02Styles: page02Styles(s, page02, fills.page02),
    page03Styles: page03Styles(s, page03, fills.page03),
    containerStyles: containerStyles(s, width),
    toolbarStyles: toolbarStyles(s, width),
    aboutButtonStyles: aboutButtonStyles(s, width)
  };
}
