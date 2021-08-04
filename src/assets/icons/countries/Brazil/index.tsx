import React from 'react';

export interface Props {
 width?: string | number;
 height?: string | number;
}

export const BrazilFlagIcon: React.FC<Props> = ({
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
    <clipPath id="brazil-icon-clip">
     <rect
      fill="#fff"
      stroke="rgba(66,65,65,0.8)"
      width="30"
      height="30"
      transform="translate(915 133)"
     />
    </clipPath>
   </defs>
   <g clipPath="url(#brazil-icon-clip)" transform="translate(-915 -133)">
    <g transform="translate(915 138)">
     <rect fill="#6da544" width="30" height="20" rx="1.25" />
     <path
      fill="#ffda44"
      d="M169.476,202.1l9.476,6.982-9.476,6.982L160,209.08Z"
      transform="translate(-154.476 -199.08)"
     />
     <circle
      fill="#f0f0f0"
      cx="3.99"
      cy="3.99"
      r="3.99"
      transform="translate(11.01 6.01)"
     />
     <g transform="translate(11.011 6.01)">
      <path
       fill="#0052b4"
       d="M254.646,315.783a6.712,6.712,0,0,0-2,.3,3.989,3.989,0,0,0,7.256,2.236A6.724,6.724,0,0,0,254.646,315.783Z"
       transform="translate(-252.652 -312.041)"
      />
      <path
       fill="#0052b4"
       d="M265.674,257.375a3.99,3.99,0,0,0-7.583-2.339A8.225,8.225,0,0,1,265.674,257.375Z"
       transform="translate(-257.769 -252.624)"
      />
     </g>
    </g>
   </g>
  </svg>
 );
}

export default BrazilFlagIcon;