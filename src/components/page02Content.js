import React, { Component } from 'react';
import Radium from 'radium';
import * as R from 'ramda';
import TweenLite from 'gsap';
import tl, { t1} from '../styles/loading-timeline';
import { log } from 'ruucm-util';
import img from '../../img/b.png'

const triangleStyles = {
  backfaceVisibility: 'hidden',
  perspective: 1000,
  opacity: 0.5
};

/**
 * The Page02Content
 */
class Page02Content extends Component {
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
    TweenLite.fromTo(this._page01Content, 1, {
      left: 0, opacity: 0
    },
    {
      left: 100, opacity: 1
    })

    TweenLite.fromTo(this._page01Image, 1, {
      top: 0, opacity: 0,
    }, {
      top: 30 + 'vh', opacity: 1,
      ease: Power3.easeInOut,
    }, 'phase-1')
  }
  disappear = () => {
    TweenLite.fromTo(this._page01Content, 1, {
      left:100, opacity:1
    },
    {
      left:0, opacity:0
    })

    TweenLite.fromTo(this._page01Image, 1, {
      top: 30 + 'vh', opacity: 1,
    }, {
      top: 0, opacity: 0,
      ease: Power3.easeInOut,
    }, 'phase-1')
  }

  render() {
    const { fill, vertices, visible, x, y, r } = this.props;
    const d = buildD(vertices);

    return (
      <div id='page02-content'>
        <h2 ref={(c) => this._page01Content = c}>[SPA AVAILABLE]</h2>
        <div className='details' ref={(b) => this._page01Image = b}>
          <a href='http://beuswedding.com/app'><img src={img} /></a>
          <p>click here !</p>
        </div>
      </div>
    );
  };

}

export default Radium(Page02Content);

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
