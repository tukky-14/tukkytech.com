/* eslint @typescript-eslint/no-var-requires: off */
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-northeast-1' });

exports.handler = async () => {
    const tableName = process.env.ITGIRL_CHAT_HISTORY_TABLE;
    const params = {
        TableName: tableName,
        Key: {
            user_id: '',
            timestamp: '',
        },
        UpdateExpression: 'set #message = :message',
        ExpressionAttributeNames: {
            '#message': 'message', // DynamoDBの予約語との衝突を避けるために属性名を置き換える
        },
        ExpressionAttributeValues: {
            ':message':
                'HTMLについて説明するね！HTMLとはは、Hyper Text Markup Languageの略で、ウェブページを作るための言語の一つだよ。HTMLを使うことで、文章や画像、音声などをウェブページ上に表示することができるんだ。HTMLは、タグと呼ばれる特殊な記号を使って書かれることが特徴的だよ。例えば、<p>というタグを使うと、段落を表示することができるんだ。理解できたかな？😊', // 更新したい内容
        },
        ReturnValues: 'UPDATED_NEW', // 更新後の新しい値を返す
    };

    try {
        let data = await docClient.update(params).promise();

        console.log(JSON.stringify(data));

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('DynamoDBエラー: ', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'データの更新中にエラーが発生しました。' }),
        };
    }
};
