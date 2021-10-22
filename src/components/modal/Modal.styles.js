import styled from "styled-components";
import * as colors from '../../theme/colors';
import { modal, popover } from "../../theme/layers";
import * as typo from "../../theme/typography";

export const ModalContent = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  z-index: ${modal};
  max-height: 80vh;
`;
export const ModalBackground = styled('div')`
  background-color: ${colors.black};
  opacity: 0.8;
  position: fixed;
  z-index: ${popover};
  width: 100vw;
  height: 100vh;
  top:0;
  left: 0;
`;

export const ModalBody = styled('div')`
  width: 60%;
  position: fixed;
  top: 5rem;
  margin-left: 20%;
  height: calc(100vh - 6rem);
  padding: 1rem;
  z-index: ${modal};
  overflow: hidden;
  overflow-y: scroll;
  background-color: ${colors.cloud0};
  border-radius: 0.3rem;
  transition: 1s ease;
`;

export const ModalTitle = styled('h1')`
  ${typo.P_B};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30rem;
  padding: 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

export const ModalDescription = styled('div')`
  ${typo.Label_M}
`;

export const ModalClose = styled('div')`
 position: absolute;
  top: .4rem;
  right: 0.2rem;
  width: 3rem;
  height: 3rem;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .4s;
  border-radius: 50%;
  margin: .3rem;
  :hover{
    opacity: 1;
    color: ${colors.red};
    background-color: ${colors.cloud4};
    
  }
`;