# error_handler

Logs FetchWork errors to Firestore 'errors' collection.

## Installation

- Create repo on github
    - Push to main
    - Create branch: gcp_deploy
    - Merge main into gcp_deploy
- Create cloud trigger
    - Link previously created repo
    - Push to repo to trigger build
- In Cloud Functions
    - Assign runtime service account: production-service-account
    - Add runtime env vars if applicable
    - Egress settings: assign VPC Connector
    - Redeploy

## Usage

Send error to cloud trigger.

```javascript
ErrorModel =  {
    'error-code':number,
    'function-name':string,
    message:string | undefined,
    'stack-trace':string | undefined,
    time:string,
    type: Type,
    'user-id'?: string,	
}

//Type enum
Type {
    error = 'error',
    warning = 'warning',
    info = 'info',
    success = 'success',
}
```

## Cloud Function

- Built via GCP Cloud Build trigger: errorHandlerTrigger
- Function Name: errorHandler

## License

[MIT](https://choosealicense.com/licenses/mit/)

