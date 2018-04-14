import React, { Component } from 'react';
import { getStyles } from '../styles/toolbar-styles';
import tl, { t3 } from '../styles/loading-timeline';
import { log } from 'ruucm-util';

/**
 * The Toolbar
 */
class Toolbar extends Component {

  componentDidMount() {
    animate(this.refs.circle, 0.1);
    animate(this.refs.triangle, 0.15);
    animate(this.refs.square, 0.2);
    animate(this.refs.toggleAbout, 0.25);
  }

  render() {
    const { toggleTriangle, toggleSquare, toggleCircle, togglePage01, togglePage02, togglePage03, toggleAbout } = this.props;
    const { toolbarStyles, containerStyles, circleStyles,
      triangleStyles, squareStyles, page01Styles, page02Styles, page03Styles, aboutButtonStyles,
      width } = getStyles(this.props);
    log('this.props(getStyles)', this.props);
    return (
      <div className="absolute bottom-0 left-0 flex py2 col-12 border-box"
        style={ toolbarStyles }>
        <div className="flex mx-auto col-12 flex-stretch"
          style={ containerStyles }>
          <div className="mr1 circle"
            style={ page01Styles }
            onClick={ togglePage01 }
            ref="circle">
          </div>

          <div className="mr1 circle"
            style={ page02Styles }
            onClick={ togglePage02 }
            ref="triangle">
          </div>

          <div className="mr1 circle"
            style={ page03Styles }
            onClick={ togglePage03 }
            ref="square">
          </div>

          <div className="flex-auto"></div>

          <div style={ aboutButtonStyles }
            onClick={ toggleAbout }>
            <svg viewBox={ width < 400 ? '0 0 40 20' : '0 0 20 20' }
              ref="toggleAbout">
              <text x="10" y="13">
                About
              </text>
            </svg>
          </div>

        </div>
      </div>
    );
  }

}


export default Toolbar;

function animate(node, offset) {
  tl.fromTo(node, t3, {
    transform: 'translate3d(0, 30vw, 0)',
  }, {
    transform: 'translate3d(0, 0, 0)',
    ease: Expo.easeOut,
  }, `phase-3+=${ offset }`);
}
