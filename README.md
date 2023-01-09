# IQuoteApi

## System Architecture

## GraphQl

Inside the cloudformation folder is the infrastructure, schema and resolvers for graphQl actions on the IQuote.

## To test locally

- Run `npm run watch`
- Run `npm run dev`

#### Create Quotes

`POST /v1/iquotes`

```json
{
  "opportunityId": "ddabc4ac-11ed-11eb-a3db-02ef6e4b1c5a",
  "userId": 912066
}
```

`userId` above, can be found by clicking the "Launch 2Solar" button, and grabbing the ID from the URL in 2Solar
