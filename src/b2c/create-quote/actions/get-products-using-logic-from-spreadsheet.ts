// import { Opportunity } from 'common-libraries/sugar/interfaces'
import { GoogleSpreadsheet } from 'google-spreadsheet'
// import { getSSMParam } from 'common-libraries/aws'

const sheetId = '1G4WCdiew-D5sEtgQ2zp1kx6pbiA9RpfX_IrjGwKmuss'
const batteryWorksheetId = '730721358'

// Instantiates the spreadsheet
const sheet = new GoogleSpreadsheet(sheetId)

export async function getProductsUsingProductFromSpreadsheet(
  opportunity: Pick<
    Opportunity,
    'salesarea__c' | 'preferred_language' | 'market_type' | 'opportunity_type'
  >
) {
  try {
    const credentials = JSON.parse(await getSSMParam('Google/account/businesslogic', 'services'))

    await sheet.useServiceAccountAuth(credentials.service_account)
    await sheet.loadInfo()

    // worksheet equals tabs
    const worksheet = sheet.sheetsById[batteryWorksheetId]

    const result: any = await worksheet.copyToSpreadsheet(sheetId)
    const copiedWorkSheetId = result.data.sheetId

    if (!copiedWorkSheetId) throw new Error('Could not get ID of copied worksheet')

    await sheet.loadInfo()
    const temporaryWorksheet = sheet.sheetsById[copiedWorkSheetId]

    await temporaryWorksheet.addRow([
      opportunity.market_type,
      opportunity.preferred_language,
      opportunity.salesarea__c,
      opportunity.opportunity_type,
    ])

    await temporaryWorksheet.loadCells()

    const cell = temporaryWorksheet.getCellByA1('B8')
    const productList = cell.formattedValue

    await temporaryWorksheet.delete()

    return JSON.parse(productList)
  } catch (e) {
    throw new Error(`Failed to get products from Google sheets: ${e}`)
  }
}
