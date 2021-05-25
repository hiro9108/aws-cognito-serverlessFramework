# How to use Serverlessframework

> Install serverlessframework.

```sh
npm install -g serverless
```

> Install aws cli

```sh
brew install awscli
```

> Set your aws credentials. (you can follow a instruction on terminal)

```sh
aws configure
```

> Check aws credentials.

```sh
cat ~/.aws/credentials
```

> Create the `.env.local` file.

```sh
cp .env.local.example .env.local
```

> Create the `serverless.yml` in your root directory and
> deploy aws resources to development environment.

> Set environment variables. \*If you want to check SES(api/email), please attach IAM role for SES now.

> deploy aws resources to development environment.

```sh
npm run sls-deploy
```

> Rmove aws resources from development environment.

```sh
npm run sls-remove
```

> Please follow `serverless.yml`, `resources/*`, `api/*`, `,github/*` files.
> These files work for aws resources and CICD workflow. If you push or pull request to main branch, aws resoruces are created automatically.
