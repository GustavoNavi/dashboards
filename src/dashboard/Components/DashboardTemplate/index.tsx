import React from 'react';

import {
 StyContainer,
} from './styles';
import DashboardHeader from '../DashboardHeader';
import DashboardFooter from '../DashboardFooter';

export interface IProps {
 id: string;
 children?: React.ReactNode;
 idiomOptions?: any;
 onChange?: Function;
 currentIdiom?: string;
}

/**
 * @description DashboardTemplate Component.
 * @param {string} id Component Identification.
 * @param {ReactElement} children React elements children.
 * @param {object} idiomOptions Select idiom options.
 */
const DashboardTemplate: React.FC<IProps> = ({
 id,
 children,
 onChange = () => null,
}) => {

 return (
  <StyContainer
   id={`${id}-id`}
  >
   <DashboardHeader onChange={(data: string) => onChange(data)} />
   {children}
   <DashboardFooter />
  </StyContainer>
 );
};

export default DashboardTemplate;
