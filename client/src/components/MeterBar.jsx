import React from 'react';
import styled from 'styled-components';

const OuterRect = styled.rect`
  border-radius: 1px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.4), inset 0 0 0 1px rgba(0,0,0,.1);
  background-color: #f3f3f3;
  height: 17px;
  width: 100px;
  box-sizing: border-box;
`;

const InnerRect = styled.rect`
  border-radius: 1px;

  background-color: #ffce00;
  transition: width .5s ease;
  float: left;
  font-size: 0;
  height: 100%;
  box-sizing: border-box;
`;

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

  return (
    <svg width={width} height={height} aria-label={label} data-tooltip={label}>
      <rect width={width} height={height} fill="#f3f3f3" rx={r} ry={r} />
      <rect width={w} height={height} fill={color} rx={r} ry={r} style={style}/>
    </svg>
  );

}

export default Meter;