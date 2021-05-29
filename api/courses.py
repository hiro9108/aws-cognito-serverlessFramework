import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("prod-dpCode")

def courses(event, context):
    scanData = table.scan()
    items=scanData['Items']

    print(items)
    return {
        'statusCode': 200,
        'body': json.dumps(items)
    }