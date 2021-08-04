import React from 'react';

import {
 StyContainer,
} from './styles';
import DashboardHeader from '../DashboardHeader';
import DashboardFooter from '../DashboardFooter';

export interface IProps {
 id: string;
 children?: React.ReactNode;
}

/**
 * @description DashboardTemplate Component.
 * @param {string} id Component Identification.
 * @param {ReactElement} children React elements children.
 */
const DashboardTemplate: React.FC<IProps> = ({
 id,
 children,
}) => {

 return (
  <StyContainer
   id={`${id}-id`}
  >
   <DashboardHeader />
   {children}
   <DashboardFooter />
  </StyContainer>
 );
};

export default DashboardTemplate;
