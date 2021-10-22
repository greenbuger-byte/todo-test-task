import styled from "styled-components";
import * as colors from "../../theme/colors";
import * as typo from "../../theme/typography";

export const AddContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${colors.sky};
  border-radius: 0 0 1rem 1rem;
  transition: .4s;
  :hover{
    box-shadow: ${colors.shadow3};
  }
`;

export const AddLogo = styled('img')`
  width: 30rem;
`;

export const AddCard = styled('div')`
    border: .1rem solid ${colors.shadow1};
    border-radius: .3rem;
    padding: .2rem .2rem;
    height: 13rem;
`;

export const AddTitle = styled('h1')`
  ${typo.H1};
  color: ${colors.black};
`;

export const AddText = styled('p')`
  ${typo.H3_M}
`;