import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

export const ProfileHeader = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: ${colors.cloud3};
  height: 10rem;
  border-radius: 0 0 3rem 3rem;
  `;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -2rem;
  position: absolute;
  top: 13rem;
`;

export const ProfileLoginName = styled.div`
  ${typo.H3_M};
  padding-top: 1rem;
`;

export const ProfileContent = styled.div`
  margin-top:10rem;
  display: flex;
  flex-wrap: wrap;
`;

export const ProfileNavTab = styled.div`
  width: 100%;
  background-color: ${colors.cloud0};
  border: .1rem solid ${colors.cloud2};
  height: 4rem;
  display: flex;
  margin: 3rem 0;
`;

const activeProfileItem = `
  border: .1rem solid ${colors.cloud3};
  border-radius: .5rem .5rem 0 0 ;
border-bottom: .1rem solid ${colors.cloud0};
background-color: ${colors.white};
`

export const ProfileNavItem = styled.div`
  ${typo.Label_S_SB};
  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0 2rem;
  min-width: 4rem;
  cursor: pointer;
  border: .1rem solid ${colors.cloud0};
  ${props => props.active && activeProfileItem}
  :hover{
   ${activeProfileItem}
  }
`;
