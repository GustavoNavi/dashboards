import React from 'react';

export interface Props {
 width?: string | number;
 height?: string | number;
 fill?: string;
 outsideCircleColor?: string;
}

export const RadioOffIcon: React.FC<Props> = ({
 width = '18px',
 height = '18px',
 fill,
 outsideCircleColor,
}) => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
   <circle
    cx="10"
    cy="10"
    r="8"
    stroke={outsideCircleColor}
    strokeWidth="2"
    fill={fill}
    fillRule="evenodd"
   />
  </svg>
 );
};

export default RadioOffIcon;
