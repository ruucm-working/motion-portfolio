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
 * The Page03Content
 */
class Page03Content extends Component {
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
    TweenLite.fromTo(this._page03Content, 1, {
      left: 0, opacity: 0
    },
    {
      left: 100, opacity: 1
    })
  }
  disappear = () => {
    TweenLite.fromTo(this._page03Content, 1, {
      left:100, opacity:1
    },
    {
      left:0, opacity:0
    })
  }

  render() {
    const { fill, vertices, visible, x, y, r } = this.props;
    const d = buildD(vertices);

    return (
      <div id='page03-content' ref={(c) => this._page03Content = c} >
        <h2>page03-content</h2>
      </div>
    );
  };

}

export default Radium(Page03Content);

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
