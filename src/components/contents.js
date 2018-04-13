import React, { Component } from 'react';
import BG from '../components/bg';
import Circle from '../components/circle';
import Square from '../components/square';
import Triangle from '../components/triangle';
import Page01 from '../components/page01';
import Page01Content from '../components/page01Content';
import Page02Content from '../components/page02Content';
import Page03Content from '../components/page03Content';
import { log } from 'ruucm-util';

/**
 * SVG Contents
 * This component generates the base SVG
 * and sets up all the sub-components
 */
const Contents = ({ core, square, triangle, circle, page01, page02, page03 }) => {

  const { width, height, bgFill } = core;
  const viewBox = [0, 0, width, height].join(' ');

  const content = (width !== 0 && height !== 0) ? (
    <g>
      <BG fill={ bgFill }
        w={ width }
        h={ height } />

      {/* <Square { ...square } /> */}
      {/* <Triangle { ...triangle } /> */}
      {/* <Circle { ...circle } /> */}
      {log('triangle', triangle)}
      {log('page01', page01)}
      <Page01Content { ...page01 } />
    </g>
  ) : null;

  return (
    <div className='contents'>
      <h1>hey</h1>
      <Page01Content { ...page01 } />
      <Page02Content { ...page02 } />
      <Page03Content { ...page03 } />
    </div>
  );

};

export default Contents;
