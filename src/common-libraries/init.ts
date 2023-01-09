require('source-map-support').install()
if (!process.env.AWS_SAM_LOCAL) {
  const AWSXRay = require('aws-xray-sdk')
  AWSXRay.captureHTTPsGlobal(require('https'))
}
