import { badRequestError, toBodyObject } from './http-utils'

// TODO: replace with Joi validation
export function extract(names: string[], event: AWSLambda.APIGatewayProxyEvent): string[] {
  const content = toBodyObject(event)

  const values = names.map((name) => {
    const val = content[name]
    if (!val) throw badRequestError(`Please supply a valid \'${name}\'`)
    return val
  })
  return values
}

export function range(n: number) {
  return [...Array(n).keys()]
}

export function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0)
}

export function round(n: number, decimals: number = 0) {
  const dec = Math.pow(10, decimals)
  return Math.round(n * dec) / dec
}

export function inInterval(n: number, inclusiveStart: number, inclusiveEnd: number) {
  return n >= inclusiveStart && n <= inclusiveEnd
}

//careful when using on front-end. Array.from is not supported by IE 11.
export function distinct<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

export function omitNulls<T>(array: (T | null)[]): T[] {
  return array.filter((e) => e !== null) as T[]
}

export function omitUndefined<T>(array: (T | undefined)[]): T[] {
  return array.filter((e) => e !== undefined) as T[]
}

export function identity<T>(value: T) {
  return value
}
