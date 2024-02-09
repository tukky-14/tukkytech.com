module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
    plugins: ['import', 'unused-imports'],
    rules: {
        'import/order': [
            //importの読み込み順のルール
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '{react,react-dom/**,react-router-dom}',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'parent',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
            },
        ],
        'import/no-duplicates': 'warn', // 同じモジュールから複数の変数をインポートしている場合、エラーを出す
        '@next/next/no-img-element': 'off', // Next.jsで<img>要素を使用しても警告を出さないようにする
        'react/jsx-sort-props': 'error', // JSXの属性をアルファベット順にソート
        'unused-imports/no-unused-imports': 'error', // 使っていないimportは削除
        'no-param-reassign': [2, { props: false }], //パラメーターのプロパティ変更を許可
    },
};
