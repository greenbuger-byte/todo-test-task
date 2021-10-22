import styled from "styled-components";
import * as colors from '../../theme/colors';
import * as typo from "../../theme/typography";

export const HeaderStyles = styled('div')`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 5rem;
  color: ${colors.black};
  width: 100vw;
  background-color: ${colors.mysql};
  box-shadow: ${colors.shadow3};
`;

export const HeaderLeftNavigation = styled('div')`
  height: 4rem;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const HeaderWrapper = styled('div')`
  margin: 0 2rem;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  
`;

export const HeaderUser = styled('div')`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0;
  width: 21rem;
  padding: 0;
  ${typo.P_M}
`;

export const UserLogin = styled('div')`
  display: flex;
  color: ${colors.white};
  ${typo.P_B}
  padding: 0 1rem;
`;

export const UserLink = styled('div')`
  color: ${colors.white};
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  ${typo.Label_B};
  :hover{
    color: ${colors.cloud4};
  }
`;

export const HeaderTitle = styled('div')`
  display: flex;
  color: ${colors.white};
  ${typo.H3_M}
  justify-content: space-between;
  max-width: 200px;
  align-items: center;
`;

export const HeaderTitleName = styled('h1')`
  ${typo.P_B};
  margin: 0 1rem;
  color: ${colors.sky};
`;

export const ModalButton = styled('div')`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 14rem;
  align-items: center;
`;

export const HeaderAccount = styled('div')`
  height: 4rem;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMenuPopup = styled('div')`
  position: absolute;
  top: 6rem;
  width: 20rem;
  background-color: ${colors.white};
  padding: 1rem;
  border: .1rem solid ${colors.cloud1};
  box-shadow: ${colors.shadow3};
`;