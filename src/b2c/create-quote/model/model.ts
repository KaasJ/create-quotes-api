import { InverterPhaseType, ProductCategory } from 'common-libraries/sugar/interfaces'

export interface ProductSpecification {
  sungevityId: string
  quantity: number
}

export interface ProductSpecificationWithTemplate {
  productSpec: ProductSpecification
  productTemplateId: string
  productTemplateSalesArea: 'nl' | 'be'
  productTemplateDiscountPrice: string
  productTemplateTaxClass: 'Taxable' | 'Non-Taxable'
}

export interface InverterProduct {
  numberOfInverters: number
  inverter_phase_type: InverterPhaseType
  sungevity_id: number
  customer_facing_name: string
  category_name: ProductCategory
  manufacturer_name: string
}

export type CreateQuoteResult = 'OK' | Error | InvalidDesignError
export class InvalidDesignError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'invalidDesign'
  }
}
