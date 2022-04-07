# error_handler

## Description:
Logs errors to Firestore 'errors' collection.

## Cloud Function:
- Built via GCP Cloud Build trigger: errorHandlerTrigger
- Name = errorHandler
- Trigger Url = https://us-central1-job-search-310119.cloudfunctions.net/errorHandler


## Setup Instructions:
- Create repo on github
    - Create branch: gcp_deploy
- Create cloud function via cloud trigger
    - Link previously created repo
