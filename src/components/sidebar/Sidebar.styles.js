import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

export const SidebarWrapper = styled('div')`
  width: 100%;
  max-width: 220px;
  position: sticky;
  top: 42px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SidebarUl = styled('ul')`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
`;

export const SidebarLi = styled('li')`
  display: flex;
  padding: 1rem .1rem;
  width: 100%;
  ${typo.P_M};
  border-radius: .6rem;
  cursor: pointer;
  transition: .4s;
  background-color: ${(props) => props.active ? colors.cloud1 : `inherit` };
  :hover{
    background-color: ${colors.cloud1};
  }
`;

export const SidebarLiIcon = styled('span')`
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;
