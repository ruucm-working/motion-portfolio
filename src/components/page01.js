import React, { Component } from 'react';
import Radium from 'radium';
import * as R from 'ramda';
import TweenLite from 'gsap';
import tl, { t1} from '../styles/loading-timeline';
import { log } from 'ruucm-util';

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 1
};

/**
 * The Page01
 */
class Page01 extends Component {
  render() {
    const { fill, vertices, visible, x, y, r } = this.props;
    const d = buildD(vertices);

    return (
      <g style={{
        transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)'
      }}>
        <defs>
          <Mask visible={ visible } r={ r }/>
        </defs>
        <path ref={(c) => this._triangle = c}
          style={ triangleStyles }
          fill={ fill }
          d={ d }
          clipPath="url(#page01-mask)" />
      </g>
    );
  };

}

export default Radium(Page01);


/**
 * Mask
 */
class Mask extends Component {
  componentDidMount() {
    this.disappear();
  }
  shouldComponentUpdate(nextProps) {
    return !R.equals(this.props, nextProps);
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    if (prevProps.visible === visible) { return; }

    if (visible) {
      this.appear();
    } else {
      this.disappear();
    }
  }

  appear = () => {
    const dist = 3 * this.props.r * 0.39;
    TweenLite.fromTo(this._circleMask, 6, {
      attr: { cx: -dist, cy: dist }
    }, {
      attr: { cx: 0, cy: 0 },
      ease: Power3.easeInOut,
    });
  }

  disappear = () => {
    const dist = 3 * this.props.r * 0.39;
    TweenLite.fromTo(this._circleMask, 3, {
      attr: { cx: 0, cy: 0 }
    }, {
      attr: { cx: -dist, cy: dist },
      ease: Power3.easeInOut,
    });
  }

  render() {
    const { visible, r } = this.props;

    return (
      <clipPath id="page01-mask">
        <circle r={ 1.5 * r }
          cx={ 0 } cy={ 0 }
          ref={(c) => this._circleMask = c} />
      </clipPath>
    );
  }

};

/**
 * Utilities
 */
function buildD(vertices) {
  return [
    'M', ...vertices[0],
    'L', ...vertices[0],
    'L', ...vertices[1],
    'L', ...vertices[2],
    'Z'
  ].join(' ');
}
