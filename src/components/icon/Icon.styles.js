import styled from 'styled-components';

export const IconWrapper = styled.div((props) => ({
    alignItems: 'center',
    display: 'inline-flex',
    height: `${props.size / 10}rem`,
    justifyContent: 'center',
    width: `${props.size / 10}rem`,

    svg: {
        height: '100%',
        width: '100%',
    },
}));