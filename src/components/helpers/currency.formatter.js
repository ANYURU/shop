 export const ugandaShillings = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'UGX',
})

/**
 * 
 * @param {Number} amount Amout of money.
 * @param {String} countryCode currency country code for the currency you want to format to.
 * @param {String} languageCode language country code eg 'en-US'.
 * @returns {String} Amount formated with the currency specified.
 */

export const currencyFormatter = (amount, countryCode='UGX', languageCode='en-US') => {
    const formatter = new Intl.NumberFormat( languageCode, {
        style: 'currency',
        currency: countryCode,
    })

    return formatter.format(amount)

}
