# Create quote logic

An api that compiles products for a quote based on logic written in Google Sheets.

The goal of this project was to test the feasibility of using Google Spreadsheets as a source for the business logic needed for quote creation. Reasons to start this project comes from the fact that maintaining the product addition logic was a time consuming and costly processes. Making it worth the effort to experiment with ways to empower non-dev's to view and update the business logic. 

Project has been successfuly tested but was never implemented. An important downside of this project was the added risk and loose of control over the logic.


**Please note that this is a _test_ project and a stripped down version of the original API**
## Local development 
You will need [SAM-CLI](https://github.com/awslabs/aws-sam-cli) to run this api.

- Run `npm run setup` 
- Run `npm install` to install dependencies
- Run `npm run watch`
- Invoke the lambda using `npm run create-quotes-in-sugar`. You can edit the lambda input in the `create-quote.json` file in the task-examples folder. 
## API

The API exposes an endpoint that can be used to invoke the quote creation lambda.

`POST /v1/create-quote`

```json
{
  "opportunityId": "ddabc4ac-11ed-11eb-a3db-02ef6e4b1c5a",
  "userId": 912066
}
```

## Deployments
Deployments are handled by Bitbucket Pipelines (config in `bitbucket-pipelines.yml`) and make use of SAM, a layer on top of Cloudformation created by AWS.