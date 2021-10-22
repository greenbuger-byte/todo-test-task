import styled from "styled-components";
import Avatar from "react-avatar";

import Input from "../../input";
import SelectTimePicker from "../../input/SelectTimePicker";
import FlashMessage from "../../flash-message";
import Icon from "../../icon";
import Button from "../../button";

import {modal, popover} from "../../../theme/layers";
import * as colors from '../../../theme/colors';
import * as typo from '../../../theme/typography';

export const TaskViewWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 1rem;  
`;

export const TaskViewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1rem;
`;

export const ChangePriority = styled('div')`
  position: absolute;
  top: 8.2rem;
  z-index: ${popover};
  height: 5rem;
  background-color: ${colors.white};
  box-shadow: ${colors.shadow3};
  ${typo.Label_S_M};
  ::after {
    content: '';
    position: absolute;
    left: 2rem;
    top: -2rem;
    border: 1rem solid transparent;
    border-bottom: 10px solid ${colors.white};
  }
  ::before {
    content: '';
    position: absolute;
    left: 2rem;
    top: -2rem;
    border: 1rem solid transparent;
    border-bottom: 1rem solid ${colors.shadow3};
  }
`;

export const TaskViewTitle = styled('div')`
  ${typo.P_B};
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const StyledIcon = styled(Icon)`
  margin-right: 0;
`;

export const TaskEditView = styled('p')`
  opacity: .6;
  display: flex;
  align-items: center;
  margin-left: .5rem;
  svg{
    cursor: pointer;
  }
  :hover{
    opacity: 1;
  }
`;

export const TaskViewDescriptionTitle =styled('div')`
  ${typo.P_S1_R};
  margin-top: 2rem;
`;

export const TaskViewDescription = styled('div')`
  ${typo.P_S2_M};
  background-color: ${colors.cloud1};
  padding: 1rem;
  margin: 1rem 0;
  white-space: pre-line;
  transition: .6s;
  :hover{
    cursor: pointer;
    background-color: ${colors.cloud2};
  }
`;

export const TaskViewBar = styled('div')`
  display: flex;
  position: sticky;
  top:0;
  flex-direction: column;
  flex: .3;
`;

export const StyledButton = styled(Button)`
  max-height: 4rem;
  display: flex;
  justify-content: start;
  margin: .2rem 0;
  position: relative;
`;

export const TaskFindUser = styled('div')`
  position: absolute;
  width: 100%;
  top: 5rem;
  z-index: ${modal + 1};
  max-height: 20rem;
  overflow-y: scroll;
  background-color: ${colors.white};
  border: .1rem solid ${colors.shadow3};
`;

export const TaskViewPopup = styled('div')`
  position: relative;
`;

export const TaskProfileList = styled('ul')`
  padding: .3rem;
  display: flex;
  flex-direction: column;
`;

export const TaskProfileItem = styled('li')`
  padding:.5rem;
  cursor: pointer;
  ${typo.Label_S_SB};
  :hover{
    background-color: ${colors.cloud1};
  }
`;

export const TaskViewResponsibleTitle = styled('div')`
  ${typo.P_S1_R};
  margin: 1rem 0;
`;

export const TaskViewResponsibleList = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: .2rem;
  justify-content: start;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: .4rem;
`;

export const TaskViewResponsible = styled('div')`
  display: flex;
  background-color: ${colors.white};
  padding: .3rem;
  flex-direction: column;
`;

export const TaskViewResponsibleProfile = styled('div')`
  ${typo.Label_M};
  margin: .1rem;
  display: flex;
`;

export const TaskInfoAvatar = styled(Avatar)`
  margin: 0 .4rem;
`;

export const TaskViewInfo = styled.div`
  ${typo.Label_B};
  position: relative;
  margin: .3rem 0;
  display: flex;
  cursor: pointer;
  align-items: center;
  svg{
    margin: 0 .3rem;
  }
`;

export const StyledDescriptionInput = styled(Input)`
  ${typo.P_S2_M};
  min-height: 20rem;
`;

export const DescriptionEdit = styled('form')`
  background-color: ${colors.cloud1};
`;

export const StyledTitleInput = styled(Input)`
  background: none;
  border: 0;
  width: 80%;
  padding: 0;
  margin:-2rem 0 ;
  ${typo.P_B};
`;

export const StyledPriorityWrapper = styled('div')`
  margin: 0 1rem;
  cursor: pointer;
`;

const whiteTriangle = `
    content: '';
    position: absolute;
    border: 10px solid transparent;
`;

export const TaskTimeEditButtons = styled('div')`
  margin: 1rem 1rem 0 0;
  display: flex;
  justify-content: space-between;
`;

export const TaskTimeEdit = styled('div')`
  position: absolute;
  display: flex;
  top: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  border: .1rem solid ${colors.cloud2};
  :before{
    ${whiteTriangle};
    left: calc( 50% - 1rem); top: -21px;
    border-bottom: 10px solid ${colors.cloud2};
  }
  :after{
    ${whiteTriangle};
    right: calc( 50% - 1rem); top: -20px;
    border-bottom: 10px solid ${colors.white};
  }
`;

export const StyledSelectTimePicker = styled(SelectTimePicker)`
  height: 1rem;
`;

export const TaskEmptyList = styled(FlashMessage)`
  padding: 1rem;
  width: 100%;
`;

export const TaskStatus = styled('div')`
  display: flex;
  justify-content: space-around;
`;
