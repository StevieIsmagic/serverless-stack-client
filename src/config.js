const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-2wgo33iivw0y",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://bg9ewwd6l2.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_DMKJ4zq49",
    APP_CLIENT_ID: "46rucvg19nscoql7l2b4as4cf7",
    IDENTITY_POOL_ID: "us-east-2:44ebd28d-e9bc-4fee-8047-21dfbaabdc1e",
  },
};

export default config;
