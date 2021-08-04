import React from 'react';

export interface Props {
    width?: string | number;
    height?: string | number;
    fill?: string;
    middleCircleColor?: string;
    outsideCircleColor?: string;
}

export const RadioOnIcon: React.FC<Props> = ({
    width = '18px',
    height = '18px',
    fill,
    middleCircleColor,
    outsideCircleColor
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width}>
            <circle
                cx="10"
                cy="10"
                r="8"
                stroke={outsideCircleColor ? outsideCircleColor : middleCircleColor}
                strokeWidth="2"
                fill={fill}
                fillRule="evenodd"
            />

            <circle cx="10" cy="10" r="5" fill={middleCircleColor} />
        </svg>
    );
};

export default RadioOnIcon;
