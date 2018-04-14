import React, { Component, PropTypes } from 'react';
import css from '../app.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Canvas from '../components/canvas';
import Contents from '../components/contents';
import Toolbar from '../components/toolbar';
import About from '../components/about';
import ColourSelector from '../components/colour-selector';
import * as R from 'ramda';
import { log } from 'ruucm-util';

class App extends Component {

  handleResize = () => {
    this.props.windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    window.addEventListener('keyup', this.props.triggerKeyboardEvents);
    log('this.props', this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const toolbarProps = {
      triangle: this.props.triangle.visible,
      square: this.props.square.visible,
      circle: this.props.circle.visible,
      page01: this.props.page01.visible,
      page02: this.props.page02.visible,
      page03: this.props.page03.visible,
      toggleTriangle: this.props.toggleTriangle,
      toggleSquare: this.props.toggleSquare,
      toggleCircle: this.props.toggleCircle,
      togglePage01: this.props.togglePage01,
      togglePage02: this.props.togglePage02,
      togglePage03: this.props.togglePage03,
      toggleAbout: this.props.toggleAbout,
      width: this.props.core.windowWidth,
      fills: {
        triangle: this.props.triangle.fill,
        square: this.props.square.fill,
        circle: this.props.circle.fill,
        page01: this.props.page01.fill,
        page02: this.props.page02.fill,
        page03: this.props.page03.fill,
      }
    };

    const colourSelectorProps = {
      setPalette: this.props.setPalette,
      width: this.props.core.windowWidth,
      palette: this.props.core.palette
    };

    return (
      <div className="overflow-hidden">
        {/* <ColourSelector { ...colourSelectorProps } /> */}
        <Contents { ...this.props } />
        <Canvas { ...this.props } />
        <Toolbar { ...toolbarProps } />
        <About toggleAbout={ this.props.toggleAbout }
          isVisible={ this.props.core.aboutModalVisible } />
      </div>
    );
  }

};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect((state) => state, mapDispatchToProps)(App);
