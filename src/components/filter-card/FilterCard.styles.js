import styled from "styled-components";

import * as typo from '../../theme/typography';
import * as colors from '../../theme/colors';

export const FilterCardWrapper = styled('div')(({fill}) => ({
    ...(typo.H2_R),
    borderRadius:'.3rem',
    margin: '.4rem',
    padding: '1rem',
    backgroundColor: fill ? fill : colors.red,
    color: colors.white,
    minHeight: '5rem',
}));