# Create Serverless Template

```sh
serverless create --template aws-nodejs --name <service name> --path <service directory>
```

> Execute lambda function in local.

```sh
sls invoke local --function hello --data demo --region <your region>
```

> Remove aws resources

```sh
sls remove -v
```
