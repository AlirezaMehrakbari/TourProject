const CURRENCY_FORMATTER = new Intl.NumberFormat()
export const formatCurrency = (number : number) => {
    return CURRENCY_FORMATTER.format(number)
}

export default formatCurrency
