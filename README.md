# error_handler
Takes:
    ErrorModel =  {
        'error-code':number,
        'function-name':string,
        message:string | undefined,
        'stack-trace':string | undefined,
        time:string,
        type: Type,
        'user-id'?: string,	
    }

Type enum:
    Type {
        error = 'error',
        warning = 'warning',
        info = 'info',
        success = 'success',
    }
    
## Description:
Logs errors to Firestore 'errors' collection.

## Cloud Function:
- Built via GCP Cloud Build trigger: errorHandlerTrigger
- Name = errorHandler
- Trigger Url = https://us-central1-job-search-310119.cloudfunctions.net/errorHandler


## Setup Instructions:
- Create repo on github
    - Push to main
    - Create branch: gcp_deploy
    - Merge main into gcp_deploy
- Create cloud trigger
    - Link previously created repo
    - Push to repo to trigger build
- In Cloud Function
