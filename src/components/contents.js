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
