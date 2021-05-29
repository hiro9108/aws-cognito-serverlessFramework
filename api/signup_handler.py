import json
import boto3
import random

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table("prod-dpCode")

# Post confirmation with cognito
def signup(event, context):
    print(event)
    response = table.put_item(
        Item={
            "user_id": f"{random.randint(1000,100000)}",
            "first_name": "Brooklyn",
            "last_name": "Beckham",
            "image_path": "https://sampledata.png",
            "birth": "1994-01-24 00:00:00",
            "email": "student1@gmail.com",
            "phone": "123-456-7890"
        }
    )
    return event