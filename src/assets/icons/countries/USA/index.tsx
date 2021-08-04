import React from 'react';

export interface Props {
 width?: string | number;
 height?: string | number;
}

export const UnitedStatesFlagIcon: React.FC<Props> = ({
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
    <clipPath id="united-states-flag-icon-clip">
     <rect
      fill="#fff"
      stroke="rgba(66,65,65,0.8)"
      width="30"
      height="30"
      transform="translate(915 133)"
     />
    </clipPath>
   </defs>
   <g
    clipPath="url(#united-states-flag-icon-clip)"
    transform="translate(-915 -133)"
   >
    <g transform="translate(915 133)">
     <rect
      fill="#f0f0f0"
      width="30"
      height="20"
      rx="1"
      transform="translate(0 5)"
     />
     <rect
      fill="#d80027"
      width="30"
      height="2.5"
      transform="translate(0 7.5)"
     />
     <rect
      fill="#d80027"
      width="30"
      height="2.5"
      transform="translate(0 12.5)"
     />
     <rect
      fill="#d80027"
      width="30"
      height="2.5"
      transform="translate(0 17.499)"
     />
     <path
      fill="#d80027"
      d="M0,0H30a0,0,0,0,1,0,0V1.5a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V0A0,0,0,0,1,0,0Z"
      transform="translate(0 22.5)"
     />
     <path
      fill="#2e52b2"
      d="M1,0H15a0,0,0,0,1,0,0V10.769a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1A1,1,0,0,1,1,0Z"
      transform="translate(0 5)"
     />
     <path
      fill="#f0f0f0"
      d="M5.849,9.412l-.242.743H4.826l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H6.09Z"
     />
     <path
      fill="#f0f0f0"
      d="M6.09,12.837l-.241-.743-.242.743H4.826l.632.459-.242.743.632-.459.632.459L6.239,13.3l.632-.459Z"
     />
     <path
      fill="#f0f0f0"
      d="M2.788,12.837l-.241-.743-.242.743H1.523l.632.459-.242.743.632-.459.632.459L2.937,13.3l.632-.459Z"
     />
     <path
      fill="#f0f0f0"
      d="M2.546,9.412l-.242.743H1.523l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H2.788Z"
     />
     <path
      fill="#f0f0f0"
      d="M5.849,6.729l-.242.743H4.826l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H6.09Z"
     />
     <path
      fill="#f0f0f0"
      d="M2.546,6.729,2.3,7.473H1.523l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H2.788Z"
     />
     <path
      fill="#f0f0f0"
      d="M9.151,9.412l-.242.743H8.128l.632.459-.241.743.632-.459.632.459-.242-.743.632-.459H9.393Z"
     />
     <path
      fill="#f0f0f0"
      d="M9.393,12.837l-.241-.743-.242.743H8.128l.632.459-.241.743.632-.459.632.459L9.542,13.3l.632-.459Z"
     />
     <path
      fill="#f0f0f0"
      d="M12.7,12.837l-.241-.743-.242.743h-.781l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459Z"
     />
     <path
      fill="#f0f0f0"
      d="M12.454,9.412l-.242.743h-.781l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H12.7Z"
     />
     <path
      fill="#f0f0f0"
      d="M9.151,6.729l-.242.743H8.128l.632.459-.241.743.632-.459.632.459-.242-.743.632-.459H9.393Z"
     />
     <path
      fill="#f0f0f0"
      d="M12.454,6.729l-.242.743h-.781l.632.459-.242.743.632-.459.632.459-.242-.743.632-.459H12.7Z"
     />
    </g>
   </g>
  </svg>
 );
}

export default UnitedStatesFlagIcon;