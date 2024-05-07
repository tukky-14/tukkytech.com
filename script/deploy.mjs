import { exec } from 'child_process';

import dotenv from 'dotenv';
dotenv.config();

exec(`aws s3 ls`, (error, stdout) => {
    if (error) {
        console.error(`エラーが発生しました: ${error}`);
        return;
    }
    console.log(stdout);
});
