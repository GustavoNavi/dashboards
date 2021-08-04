import styled from 'styled-components';

export const StyContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface IStyContentWrapper {
  readonly minHeight: string;
}

export const StyContentWrapper = styled.div<IStyContentWrapper>`
  width: 100%;
  min-height: ${(props) =>
    props.minHeight ? props.minHeight : 'calc(100% - 150px)'};
  background: green;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyMenuWrapper = styled.div`
  width: 100%;
  height: 50px;
  background: green;
  box-shadow: 0 1px 8px 0 ${(props) => props.theme.color.menuContent.shadow};
  top: 0px;
  z-index: ${(props) => props.theme.appZIndex.lg};
`;

export const StyStickPanelWrapper = styled.div`
  top: 0;
  position: relative;
`;

export const StyHorizontalLine = styled.div`
  width: 100%;
  height: 10px;
  background-color: green;
  border-bottom: 1px solid green;
`;

export const StySidebarContent = styled.div`
  width: 100%;
  padding: 10px 25px;
`;

export const StyLineWrapper = styled.div`
  display: flex;
  height: 35px;
  width: 100%;
`;

export const StyInline = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
`;

export const StyGroup = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
`;

export const StyGroupLine = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;

  & > div:first-of-type {
    padding: 0px 20px;
  }
`;

export const StyInlineGroup = styled.div`
  width: 100%;
  justify-content: flex-end;

  & > span {
    color: green;
  }
`;

export const StyButtonsGroup = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  align-items: flex-end;

  & > div {
    width: 100%;
  }
`;

export const StyVerticalLine = styled.div`
  width: 2px;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  border-left: 1px solid green;
`;

export const StyButtonsWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyVersionSystem = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;

  & > span {
    color: green;
  }
`;

export const StyFilters = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyWrapperRadio = styled.div`
 display: flex;
 align-self: center;
`;