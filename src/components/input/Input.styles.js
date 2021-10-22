import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';
import Flatpickr from "react-flatpickr";

const commonStyle = `
  height: 4rem;
  padding: 1rem;
  border-radius: .3rem;
  outline: 0;
  outline-offset: 0;
  ${typo.P_M};
  width: 100%;
  box-sizing: border-box;
`;

export const InputContainer = styled('div')`
  padding: ${ (props) => props.padding ? `${props.padding}rem`: `1rem` };
  width: 100%;
`;

export const InputTextarea = styled('textarea')`
  ${typo.P_M}
  box-sizing: border-box;
  border: ${ props => props.withError ? `0.1rem solid ${colors.red}` : `0.1rem solid ${colors.cloud4}`};
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  border-radius: .3rem;
  outline: 0;
  outline-offset: 0;
`;

export const InputStyled = styled('input')`
  ${typo.P_S1_B}
  box-sizing: border-box;
  border: ${ props => props.withError ? `0.1rem solid ${colors.red}` : `0.1rem solid ${colors.cloud4}`};
  width: 100%;
  height: 4rem;
  padding: 1rem;
  border-radius: .3rem;
  outline: 0;
  outline-offset: 0;
  ::placeholder{
   color: ${colors.snowflake};
  } 
`;

export const InputLabel = styled('label')`
  ${typo.Label_S_M}
`;

export const Error = styled('div')`
  ${typo.P_S2_R};
  color: ${colors.error};
  margin-top: 0.6rem;
`;

export const StyledSelect = styled('select')`
  ${commonStyle};
  border:  0.1rem solid ${colors.cloud4};
`;

export const StyledFlatpickr = styled(Flatpickr)`
  ${commonStyle};
  border: 0.1rem solid ${colors.cloud4};
`;

