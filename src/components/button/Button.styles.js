import styled from "styled-components";

import * as colors from "../../theme/colors";
import * as typo from "../../theme/typography";

const beforeStyles = (props) => ({
    ...(!props.disabled && { animation: `500ms cubic-bezier(0.25, 2.5, 0.5, 1)` }),
    content: '""',
    borderRadius: props.small ? '0.3rem' : '0.4rem',
    height: '100%',
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    transformOrigin: 'center',
    transition: '200ms ease-in-out',
    width: '100%',
    zIndex: '-1',
});

const primaryStyles = (props) => ({
    color: colors.white,

    '&:before': {
        ...beforeStyles(props),
        ...(!props.disabled && { boxShadow: colors.shadow1 }),
        backgroundColor: props.disabled ? colors.lightRed1 : colors.red,
    },
});

const darkStyles = (props) => ({
    color: colors.white,

    '&:before': {
        ...beforeStyles(props),
        ...(!props.disabled && { boxShadow: colors.shadow1 }),
        backgroundColor: props.disabled ? colors.cloud3 : colors.black,
    },
});

const lightStyles = (props) => ({
    color: props.disabled ? colors.cloud4 : colors.textPrimary,

    '&:before': {
        ...beforeStyles(props),
        ...(!props.disabled && { border: `.1rem solid ${colors.cloud2}` }),
        ...(!props.disabled && { boxShadow: colors.shadow0 }),
        backgroundColor: colors.white,
    },
});

const ghostStyles = (props) => ({
    color: props.disabled ? colors.whiteA30 : colors.white,

    '&:before': {
        ...beforeStyles(props),
        ...(!props.disabled && { border: `.1rem solid ${colors.whiteA10}` }),
        ...(!props.disabled && { boxShadow: colors.shadow0 }),
        backgroundColor: props.disabled ? colors.textSecondaryA15 : colors.whiteA5,
    },
});

export const StyledButton = styled('button')((props) => ({
    ...(props.variant === 'primary' && primaryStyles(props)),
    ...(props.variant === 'dark' && darkStyles(props)),
    ...(props.variant === 'light' && lightStyles(props)),
    ...(props.variant === 'ghost' && ghostStyles(props)),
    ...(!props.disabled && { cursor: 'pointer' }),
    ...(props.small ? typo.P_S2_B : typo.P_S1_B),
    ...(!props.disabled && {
        '&:focus, &:hover': {
            '&:before': {
                boxShadow: colors.shadow2,
            },
        },
    }),
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'inline-flex',
    isolation: 'isolate',
    justifyContent: 'center',
    lineHeight: props.small ? '1.2rem' : '1.6rem',
    padding: props.small ? '1.2rem' : '1.5rem 1.6rem',
    position: 'relative',
    margin: '0 0.2rem',
    width : props.full && '100%',
    svg: {
        margin: props.isNoLabel ? 0 : ' 0 .6rem 0 0'
    }

}));

export const IconMargin = styled('span')(({size}) => ({
    margin: `0 ${size ? (size / 10) + `rem` : 0}`
}));