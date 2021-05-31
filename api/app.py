import boto3
import os
import json
from typing import Dict

print('Loading function')
table_name: str = "dev-dpCode"
temp_delete_table_name: str = '"dev-dpCode"'
pk: str = "PK"
sk: str = "SK"

def scan_table(dynamodb=None):
    """
    Get all data in the table
    :return: scan result
    """
    if not dynamodb:
        return

    table = dynamodb.Table(table_name)
    scan_result: Dict = table.scan()
    return scan_result["Items"]


def delete_items(data, client=None):
    """
    Delete all data in the table
    :param data: data in the table
    :param client: client
    """
    
    if not client:
        return
    for d in data:
        print(f"DELETE FROM {temp_delete_table_name} WHERE {pk} = '{d[pk]}' and {sk} = '{d[sk]}'")
        _ = client.execute_statement(
            Statement=f"DELETE FROM {temp_delete_table_name} WHERE {pk} = '{d[pk]}' and {sk} = '{d[sk]}'")
    print("DELETE SUCCESS")


def insert_items(client=None):
    """
    Get SQL(insert statement) from sql.txt and execute it
    """
    if not client:
        return

    with open(os.path.join(os.getcwd(), "sql.txt")) as sql_file:
        for sql in sql_file:
            print("sql", sql)
            res = client.execute_statement(Statement=sql.strip())
            print("INSERT SUCCESS {0}".format(res))


def lambda_handler(event, context):
    """
    Initialize data in the table
    """
    dynamodb = boto3.resource('dynamodb')
    data = scan_table(dynamodb)

    client = boto3.client('dynamodb')
    delete_items(data, client)
    insert_items(client)

    return {
        'statusCode': 200,
        'body': json.dumps({"mes": "success"})
    }
