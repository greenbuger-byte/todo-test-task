export const passwordValidateRules = (t) => ({ required: true, minLength: {
        value: 6,
        message: t('form.short_password')
    },
    maxLength: {
        value: 12,
        message: t('form.long_password')
    },
    pattern: {
        value: /[A-Za-z0-9]{2,12}/i,
        message: t('form.right_password')
    }
});