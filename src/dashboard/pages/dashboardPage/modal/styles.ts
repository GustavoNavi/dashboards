import styled, { css } from 'styled-components';
import { DashboardSpacing } from '../../../ts/enum/DashboardSpacing';
interface IStyContainerProps {
 readonly show: boolean;
}
export const StyContainer = styled.div<IStyContainerProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 500;
  ${(props) =>
  props.show &&
  css`
      opacity: 1;
      animation: fade 1s;
    `}
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyDialogWrapper = styled.div`
  width: 1100px;
  height: 80%;
  background: rgb(255,255,255);
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${DashboardSpacing.base20} 0px;
`;
export const StyModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(66,65,65,0.3);
`;

export const StyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;
  width: 100%;
  margin-top: ${DashboardSpacing.base20};
`;
export const StyName = styled.div`
  width: 550px;
  display: flex;
  align-items: baseline;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  & > span:first-of-type {
    margin-left: 50px;
  }
`;
export const StyLine = styled.hr`
  margin-bottom: ${DashboardSpacing.base20};
  width: 91%;
  color: rgba(66,65,65,0.3);
`;

export const StyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: overlay !important;
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: rgba(36,35,35,0.1);
  }
  ::-webkit-scrollbar-thumb:vertical {
    background-color: rgba(36,35,35,0.2);
  }
`;
export const StyCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 98%;
  position: absolute;
  height: 20px;
`;


export const StyFormGroupInfo = styled.div`
  display: flex;
  :not(:first-of-type) {
   margin-top: 20px;
  }

  & > span:first-of-type {
   flex: none;
   margin-left: 50px;
  }
`;

export const StyInfoStatus = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyJustifyText = styled.div`
 display: flex;
 flex-flow: column;
 margin-right: 50px;
 text-align: justify;
`;

export const StyLink = styled.a`
 text-decoration: underline;
 color: #000;

:hover {
 text-decoration: underline;
	color: rgba(51,114,214);
}
`;