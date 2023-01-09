import { errorResponse, response } from 'common-libraries/http-utils'
// import { createProductsForB2cQuote } from './actions/create-products'
// import { createB2cQuote } from './actions/create-quote'
// import { extract } from 'common-libraries/utility-functions'
// import { fetchAdditionalInfoFromSugar } from './actions/fetch-sugar'
// import { recalculate } from './actions/recalculate-quote'
// import { getProductsFromSpreadsheets } from './actions/get-products-from-spreadsheet'
// import { addProductTemplates } from 'b2c/create-generic-quote/actions/add-product-templates'

export async function handler(event: AWSLambda.APIGatewayProxyEvent) {
  console.log(`Start creation of generic Sugar quote with input:  ${JSON.stringify(event)}`)
  try {
    // const [opportunityId, userId] = extract(['opportunityId', 'userId'], event)

    // const { opportunity, taxRateDetails } = await fetchAdditionalInfoFromSugar(opportunityId)

    // const products = await getProductsUsingLogicFromSpreadsheets(opportunity)

    // const quote = await createB2cQuote(opportunity, taxRateDetails, userId)

    // const productWithProductTemplate = await addProductTemplates(products)
    // await createProductsForB2cQuote(quote, productWithProductTemplate)

    // recalculate quote to correct prices
    // await recalculate(quote.id)

    return response(200, {
      message: 'OK',
    })
  } catch (e) {
    return errorResponse(e)
  }
}
