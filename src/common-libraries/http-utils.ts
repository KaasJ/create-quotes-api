import { StatusCodes } from 'http-status-codes'

interface ErrorResponse {
  message: string
  stack: string
  statusCode?: HttpErrorStatusCode
}

export function errorResponse(e: ErrorResponse) {
  console.log(
    `Encountered error while executing the request: code ${e.statusCode} with message '${e.message}'`
  )
  console.log(`Stacktrace: ${e.stack}`)
  return response(e.statusCode || StatusCodes.INTERNAL_SERVER_ERROR, {
    error: e.message || 'Unexpected error has occurred',
  })
}

export function badRequestError(message: string) {
  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: message,
  }
}

export function badGatewayError(message: string) {
  return {
    statusCode: StatusCodes.BAD_GATEWAY,
    message: message,
  }
}

export function response(statusCode: number, body: object) {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode,
    body: JSON.stringify(body),
  }
}

export function toBodyObject(event: AWSLambda.APIGatewayProxyEvent) {
  if (!event.body) throw badRequestError('Please supply a JSON body')

  try {
    return JSON.parse(event.body)
  } catch (e) {
    if (e.name == 'SyntaxError') throw badRequestError('Could not parse JSON body')
    else throw e
  }
}

export function isErrorStatusCode(httpStatusCode: number) {
  return httpStatusCode >= 400
}

type HttpErrorStatusCode = HttpClientErrorStatusCode | HttpServerErrorStatusCode

// we can add more errors if needed
type HttpClientErrorStatusCode = StatusCodes.BAD_REQUEST

// we can add more errors if needed
type HttpServerErrorStatusCode = StatusCodes.INTERNAL_SERVER_ERROR
