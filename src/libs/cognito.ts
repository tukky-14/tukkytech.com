/**
 * Cognitoのエラーメッセージを日本語に変換する関数
 * @param message
 * @returns
 */
export const translateErrorMessage = (message: string) => {
    const messageMap: { [key: string]: string } = {
        'Password did not conform with policy: Password not long enough':
            'パスワードは6文字以上にしてください',
        "2 validation errors detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at 'password' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[S]+.*[S]+$":
            'パスワードは6文字以上、大文字小文字を含む英数字を指定してください',
        'User does not exist.': 'ユーザーが存在しません',
        'Incorrect username or password.': 'ユーザー名またはパスワードが違います',
        'User is not confirmed.': 'ユーザーは検証されていません',
        'User already exists': 'ユーザーは既に存在します',
        'Invalid verification code provided, please try again.':
            '指定された確認コードが無効です。もう一度お試しください',
        'Invalid password format': 'パスワードのフォーマットが不正です',
        'Invalid phone number format':
            '不正な電話番号フォーマットです。 電話番号は次のフォーマットで入力してください: +12345678900',
        'An account with the given email already exists.': 'そのメールアドレスは既に存在します',
        'There is already a signed in user.': 'すでにログインしています',
        'Username cannot be empty': 'ユーザー名は必須です',
        'Password attempts exceeded': 'パスワード試行回数が超過しました',
        'Password cannot be empty': 'パスワードは必須入力です',
        'Attempt limit exceeded, please try after some time.':
            '試行制限を超過しました。しばらくしてからもう一度お試しください',
        'Username/client id combination not found.': 'ユーザーが存在しません',
        'CUSTOM_AUTH is not enabled for the client.': 'パスワードは必須です',
        'Password does not conform to policy: Password not long enough':
            'パスワードは8文字以上を入力してください (8文字以上の大文字小文字を含む英数字)',
        'Password does not conform to policy: Password must have uppercase characters':
            'パスワードには大文字を含めてください (8文字以上の大文字小文字を含む英数字)',
        'Password does not conform to policy: Password must have lowercase characters':
            'パスワードには小文字を含めてください (8文字以上の大文字小文字を含む英数字)',
        'Password does not conform to policy: Password must have numeric characters':
            'パスワードには数字を含めてください (8文字以上の大文字小文字を含む英数字)',
        "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
            'パスワードは8文字以上、大文字小文字を含む英数字を指定してください',
    };

    return messageMap[message] || '未知のエラーが発生しました。';
};
