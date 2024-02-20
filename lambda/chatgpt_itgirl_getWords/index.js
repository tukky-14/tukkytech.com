/* eslint @typescript-eslint/no-var-requires: off */
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async () => {
    const tableName = process.env.ITGIRL_CHAT_HISTORY_TABLE;
    const params = {
        TableName: tableName,
    };

    try {
        let data = await dynamoDB.scan(params).promise();
        let items = data.Items;

        // 全てのデータを取得するためのページネーション
        while (data.LastEvaluatedKey) {
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            data = await dynamoDB.scan(params).promise();
            items = items.concat(data.Items);
        }

        // itemsをmessage順に並び替え
        items.sort((a, b) => {
            if (a.message < b.message) {
                return -1;
            }
            if (a.message > b.message) {
                return 1;
            }
            return 0;
        });

        // itemsのプロパティを編集
        for (const [index, item] of items.entries()) {
            item.id = index + 1;
            item.title = item.message;
            item.description = item.reply_message;
            delete item.message;
            delete item.reply_message;
            delete item.created_at;
            delete item.timestamp;
            delete item.user_id;
        }

        console.log(JSON.stringify(items));

        return {
            statusCode: 200,
            body: JSON.stringify(items),
        };
    } catch (error) {
        console.error('DynamoDBエラー: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'データの取得中にエラーが発生しました。' }),
        };
    }
};
