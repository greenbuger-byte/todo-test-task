import styled from "styled-components";
import * as typo from '../../theme/typography';
import * as colors from '../../theme/colors';

export const PriorityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: .2rem;
  background-color: ${colors.white};
`;
export const PriorityTitle = styled.h1`
    ${typo.P_R};
  text-align: center;
`;

export const PriorityAbout = styled('div')`
  ${typo.Label_M};
  color: ${colors.alert};
  border: .1rem solid ${colors.alert};
  padding: 1rem;
  border-radius: .3rem;
  margin: 1rem 0;
  text-align: center;
`;

export const PriorityContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`;


export const PriorityCheckbox = styled('div')`
  flex: 1;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  align-items: center;
  border-radius: .3rem;
  transition: .5s;
  padding: 1rem;
  margin: 0 1rem;
  opacity: .9;
  border: 1px solid ${(props) => props.checked ? colors.black : props.color };
  background-color: ${(props) => props.color};
  :hover{
    opacity: 1;
  }
  svg{
    margin: 0 ;
    padding: 0;
    color: ${colors.white};
  }
`;

export const PriorityView = styled('div')`
  padding: .2rem;
  display: flex;
  text-align: right;
`;