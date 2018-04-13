import React, { Component } from 'react';
import Radium from 'radium';
import * as R from 'ramda';
import TweenLite from 'gsap';
import tl, { t1} from '../styles/loading-timeline';
import { log } from 'ruucm-util';

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 0.5
};

/**
 * The Page01Content
 */
class Page01Content extends Component {
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
    TweenLite.fromTo(this._page01Content, 1, {
      left: 0, opacity: 0
    },
    {
      left: 100, opacity: 1
    })
  }
  disappear = () => {
    TweenLite.fromTo(this._page01Content, 1, {
      left:0, opacity:1
    },
    {
      left:100, opacity:0
    })
  }

  render() {
    const { fill, vertices, visible, x, y, r } = this.props;
    const d = buildD(vertices);

    return (
      <div id='page01-content' ref={(c) => this._page01Content = c} >
        <h2>page01-content</h2>
      </div>
    );
  };

}

export default Radium(Page01Content);


/**
 * Mask
 */
class Mask extends Component {

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
    const dist = 3 * this.props.r;
    TweenLite.fromTo(this._circleMask, 1, {
      attr: { cx: -dist, cy: dist }
    }, {
      attr: { cx: 0, cy: 0 },
      ease: Power3.easeInOut,
    });
  }

  disappear = () => {
    const dist = 3 * this.props.r;
    TweenLite.fromTo(this._circleMask, 0.6, {
      attr: { cx: 0, cy: 0 }
    }, {
      attr: { cx: -dist, cy: dist },
      ease: Power3.easeInOut,
    });
  }

  render() {
    const { visible, r } = this.props;

    return (
      <clipPath id="circle-mask">
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
