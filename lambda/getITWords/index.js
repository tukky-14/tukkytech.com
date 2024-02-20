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

        // itemsのプロパティを編集
        const newItems = items
            .map((item, index) => {
                return {
                    id: index + 1,
                    title: item.message,
                    description: item.reply_message,
                };
            })
            .sort((a, b) => a.title.localeCompare(b.title));

        console.log(JSON.stringify(newItems));

        return {
            statusCode: 200,
            body: JSON.stringify(newItems),
        };
    } catch (error) {
        console.error('DynamoDBエラー: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'データの取得中にエラーが発生しました。' }),
        };
    }
};
