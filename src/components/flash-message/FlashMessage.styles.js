import styled from "styled-components";

import * as colors from '../../theme/colors';
import * as typo from '../../theme/typography';

const alertStyles = () => ({
    backgroundColor: colors.lightError1,
    color: colors.error,
});

const positiveStyles = () => ({
    backgroundColor: colors.lightGreen1,
    color: colors.green,
});

const defaultStyles = () => ({
    backgroundColor: colors.black,
    color: colors.white,
});

const lightStyles = () => ({
    backgroundColor: colors.cloud0,
    colors: colors.cloud3,
})

export const FlashMessageWrapper = styled('div')((props)=>({
    ...(props.variant === 'alert' && alertStyles()),
    ...(props.variant === 'positive' && positiveStyles()),
    ...(props.variant === 'default' && defaultStyles()),
    ...(props.variant === 'light' && lightStyles()),
    ...typo.P_S1_R,
    minWidth: props.full ? '100%' : '20rem',
    alignItems: 'center',
    borderRadius: '0.4rem',
    display: 'inline-flex',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '1rem',
    margin: '.2rem',
    boxShadow: colors.shadow2,
}));