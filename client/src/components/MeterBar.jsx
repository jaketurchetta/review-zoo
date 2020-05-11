import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  height: 17px;
  width: 190px;
`;

const OuterRect = styled.div`
  position: absolute;
  height: 17px;
  width: 190px;
  background-color: #f3f3f3;
`;

const InnerRect = styled.div`
  position: absolute;
  height: 17px;
  background-color: #FFCE00;
`;

//fill: #ffce00;

const Meter = (props) => {
  var {
    percent = 0,         // number: 0 - 1, inclusive. Fill %
    width = 190,         // the width of our meter
    height = 17,         // the height of our meter
    rounded = false,      // if true, use rounded corners
    color = '#FFCE00',   // the fill color
    animate = true,     // if true, animate
    label = null         // a label for accessibility
  } = props;

  var r = rounded ? Math.ceil(height / 2) : 0;
  var w = percent ? Math.max(height, width * Math.min(percent, 1)) : 0;
  var style = animate ? { "transition": "width 500ms, fill 250ms" } : null;

  let innerRect = {
    fill: '#ffce00',
    // stroke: 'black',
    // strokeWidth: '1px',
    transition: 'width 500ms, fill 250ms',
  }

  let outerRect = {
    fill: '#f3f3f3',
    height: '17px',
    width: '190px',
    // stroke: 'black',
    // strokeWidth: '1px'
  }

  return (
    <svg height={height} width={width}>
      <rect height={height} width={width} style={outerRect}/>
      <rect height={height} width={w} style={innerRect} />
    </svg>
  );

}

export default Meter;