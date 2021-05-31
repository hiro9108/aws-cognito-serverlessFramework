import json

def auth(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps({"mes": "No auth"})
    }