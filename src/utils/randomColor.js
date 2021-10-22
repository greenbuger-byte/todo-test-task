import * as colors from '../theme/colors';

export const randomColor = () => {
    const MAX_COLORS = 3;
    const colorRandom = Math.floor(Math.random() * MAX_COLORS);
    const colorsArray = [colors.sky, colors.green, colors.red];
    return colorsArray[colorRandom];
}