import { weight } from './fonts';

const baseStyles = (fontSize, fontWeight, lineHeight) => ({
    fontSize,
    fontWeight,
    lineHeight,
});

export const H1 = {
    ...baseStyles('3.2rem', weight.semibold, '3.9rem'),
    letterSpacing: '-0.02em',
};

export const H2_R = {
    ...baseStyles('2.4rem', weight.regular, '2.9rem'),
    letterSpacing: '-0.02em',
};

export const H2_SB = {
    ...baseStyles('2.4rem', weight.semibold, '2.9rem'),
    letterSpacing: '-0.02em',
};

export const H3_R = {
    ...baseStyles('2rem', weight.regular, '2.4rem'),
    letterSpacing: '-0.02em',
};

export const H3_M = {
    ...baseStyles('2rem', weight.medium, '2.4rem'),
    letterSpacing: '-0.02em',
};

export const P_R = {
    ...baseStyles('1.4rem', weight.regular, '1.7rem'),
};

export const P_R_Bloc = {
    ...baseStyles('1.4rem', weight.regular, '1.9rem'),
};

export const P_M = {
    ...baseStyles('1.4rem', weight.medium, '1.7rem'),
};

export const P_B = {
    ...baseStyles('1.4rem', weight.semibold, '1.7rem'),
};

export const P_S1_R = {
    ...baseStyles('1.2rem', weight.regular, '1.5rem'),
};

export const P_S1_R_Bloc = {
    ...baseStyles('1.2rem', weight.regular, '1.7rem'),
};

export const P_S1_M = {
    ...baseStyles('1.2rem', weight.medium, '1.5rem'),
};

export const P_S1_B = {
    ...baseStyles('1.2rem', weight.semibold, '1.5rem'),
};

export const P_S2_R = {
    ...baseStyles('1.1rem', weight.regular, '1.3rem'),
};

export const P_S2_R_Bloc = {
    ...baseStyles('1.1rem', weight.regular, '1.4rem'),
};

export const P_S2_M = {
    ...baseStyles('1.1rem', weight.medium, '1.3rem'),
};

export const P_S2_B = {
    ...baseStyles('1.1rem', weight.semibold, '1.3rem'),
};

export const P_S3_R = {
    ...baseStyles('0.9rem', weight.regular, '1.1rem'),
};

export const P_S3_M = {
    ...baseStyles('0.9rem', weight.medium, '1.1rem'),
};

export const P_S3_B = {
    ...baseStyles('0.9rem', weight.semibold, '1.1rem'),
};

export const Label_M = {
    ...baseStyles('1rem', weight.medium, '1.2rem'),
    textTransform: 'uppercase',
};

export const Label_B = {
    ...baseStyles('1rem', weight.semibold, '1.2rem'),
    textTransform: 'uppercase',
};

export const Label_S_M = {
    ...baseStyles('0.8rem', weight.medium, '1rem'),
    textTransform: 'uppercase',
};

export const Label_S_SB = {
    ...baseStyles('0.8rem', weight.semibold, '1rem'),
    textTransform: 'uppercase',
};
