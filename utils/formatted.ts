export const formattedCurrency = (
    value: number | string,
    option?: { locales?: Intl.LocalesArgument } & Intl.NumberFormatOptions,
): string => {
    const {
        style = 'currency',
        locales = 'en-US',
        currency = 'USD',
        minimumFractionDigits = 0,
        maximumFractionDigits = 0,
        ...rest
    } = option || {};

    return new Intl.NumberFormat(locales, {
        ...rest,
        style,
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(Number(value));
};

export const formattedDateTime = (
    value: string | number | Date,
    option?: { locales?: Intl.LocalesArgument } & Intl.DateTimeFormatOptions,
) => {
    const { locales = 'en-US', dateStyle = 'long', ...rest } = option || {};

    return new Intl.DateTimeFormat(locales, {
        ...rest,
        dateStyle,
    }).format(new Date(value));
};
