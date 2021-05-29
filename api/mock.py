import os
import json
import boto3

def load_items(items, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table("dev-dpCode")
    for item in items:
        table.put_item(Item=item)

def mock(event, context):
    with open(os.path.join(os.getcwd(), "InitData.json")) as json_file:
        item_list = json.load(json_file)
    load_items(item_list)
    return {
        'statusCode': 200,
        'body': json.dumps({"mes": "success"})
    }