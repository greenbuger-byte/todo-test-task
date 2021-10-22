import * as colors from '../theme/colors';

const STATUSES = [
    {name: 'К выполнению', value: 'implementation', color: colors.mysql },
    {name: 'Выполняется', value: 'progress', color: colors.red },
    {name: 'Выполнена', value: 'completed', color: colors.green},
    {name: 'Отменена', value: 'canceled', color: colors.cloud4 },
];

export default STATUSES;
