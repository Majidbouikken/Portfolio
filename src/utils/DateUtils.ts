export const formatDate = (
    date: Date,
    locale: string = 'en-US',
    options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' },
): string => {
    return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}