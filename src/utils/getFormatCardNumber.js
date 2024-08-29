export const getFormatCardNumber = (value) => {
    return value.replace(/\D+/g, '').substring(0, 16).replace(/(.{4})/g, '$1 ').trim();
}