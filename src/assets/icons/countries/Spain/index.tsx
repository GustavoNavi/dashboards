import React from 'react';

export interface Props {
 width?: string | number;
 height?: string | number;
}

export const SpainFlagIcon: React.FC<Props> = ({
 width = '18px',
 height = '18px',
}) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width={width}
   height={height}
   viewBox="0 0 30 30"
  >
   <defs>
    <clipPath id="spain-flag-icon-clip">
     <rect
      fill="#fff"
      stroke="rgba(66,65,65,0.8)"
      width="30"
      height="30"
      rx="1"
      transform="translate(1015 200)"
     />
    </clipPath>
   </defs>
   <g
    clipPath="url(#spain-flag-icon-clip)"
    transform="translate(-1015 -200)"
   >
    <g transform="translate(1015 200)">
     <rect
      fill="#ffda44"
      width="30"
      height="20"
      rx="1"
      transform="translate(0 5)"
     />
     <path
      fill="#d80027"
      d="M1,0H29a1,1,0,0,1,1,1V6.667a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1A1,1,0,0,1,1,0Z"
      transform="translate(0 5)"
     />
     <path
      fill="#d80027"
      d="M0,0H30a0,0,0,0,1,0,0V5.667a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V0A0,0,0,0,1,0,0Z"
      transform="translate(0 18.333)"
     />
    </g>
   </g>
  </svg>
 );
}

export default SpainFlagIcon;