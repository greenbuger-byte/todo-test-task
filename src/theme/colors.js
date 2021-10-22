export const white = '#FFFFFF';
export const whiteA5 = 'rgba(255, 255, 255, 0.05)';
export const whiteA10 = 'rgba(255, 255, 255, 0.1)';
export const whiteA30 = 'rgba(255, 255, 255, 0.3)';
export const whiteA60 = 'rgba(255, 255, 255, 0.6)';

export const cloud0 = '#FAFCFF';
export const cloud1 = '#F6F8FB';
export const cloud2 = '#EFF4F8';
export const cloud3 = '#DFE8F0';
export const cloud4 = '#D1DFEC';
export const cloud5 = '#A6B9CA';

export const black = '#262727';
export const sky = '#B3D7FE';

export const textPrimary = '#313336';
export const textSecondary = '#798B9B';
export const textSecondaryA15 = 'rgba(121, 139, 155, 0.15)';
export const textElectricBlue = '#0094FF';

export const error = '#F75757';
export const lightError1 = '#FFEBEB';

export const green = '#43C0A3';
export const lightGreen1 = '#D8F6EF';

export const alert = '#F7883F';
export const lightAlert1 = '#F6E5D8';

export const pending = '#ED9C00';
export const lightPending1 = '#FEF3C7';

export const red = '#E93A5A';
export const lightRed1 = '#FFECEF';
export const lightRed2 = '#FFD2D9';

export const shadow = '0 0 1.2rem rgba(96, 126, 142, 0.1)';
export const shadow0 = '0 0.1rem 0.2rem rgba(96, 126, 142, 0.05)';
export const shadow1 = '0 0.1rem 0.4rem rgba(96, 126, 142, 0.15)';
export const shadow2 = '0 0.1rem 0.8rem rgba(96, 126, 142, 0.15)';
export const shadow3 = '0 0.1rem 1.6rem rgba(96, 126, 142, 0.15)';

export const highlightBlue = '#E0EFFF';
export const highlightPurple = '#F1E0FF';
export const highlightYellow = '#FFF8E0';
export const highlightGreen = '#E0FFF4';
export const highlightRed = '#FFE0E6';

export const highlights = [
    highlightBlue,
    highlightYellow,
    highlightGreen,
    highlightPurple,
    highlightRed,
];

export const getHighlightByIndex = (index) => {
    if (!index && index !== 0) return null;

    if (index < highlights.length) return highlights[index];

    return getHighlightByIndex(index - highlights.length);
};

export const sourceSnowflake = '#29B5E8';
export const sourceSnowflake1 = '#B7ECFF';
export const sourceSheet = '#34AE68';
export const sourceSheet1 = '#BCEED2';

export const mysql = '#00678c';
export const snowflake = '#29b5e8';
export const checkboxBorder = '#2f3838';
