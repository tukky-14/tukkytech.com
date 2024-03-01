/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { AuthProvider } from '@/hooks/use-auth';

import Home from '../pages/index';

describe('Rendering', () => {
    it('Should render title text', () => {
        const blog = [
            {
                id: 'vscode-project-manager',
                createdAt: '2024-02-12T06:46:53.387Z',
                updatedAt: '2024-02-12T07:08:32.979Z',
                publishedAt: '2024-02-12T06:55:47.562Z',
                revisedAt: '2024-02-12T07:08:32.979Z',
                title: 'VSCodeの拡張機能「Project Manager」を設定する',
                body: '<p>VSCodeの拡張機能「Project Manager」が非常に便利だったため使い方をメモします。<br>よく使うプロジェクトやワークスペースを保存し、サイドバーアイコンから素早く切り替えることができます。<br></p><h3 id="h68c0018014">拡張機能「Project Manger」のインストール</h3><p>VSCodeの拡張機能検索で「Project Manger」を検索し、インストールします。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/007b2ba554734f058482df0e51a7c41c/vscode-project-manager_1.png" alt=""><br></p><h3 id="h5e0bec2340">プロジェクト（ワークスペース）の保存</h3><p>サイドバーに追加されたフォルダのアイコンをクリックし、左上の保存ボタンをクリックします。<br>そうすると、現在のプロジェクトが追加されます。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/276effc1291f4363bdadeb43479ff174/vscode-project-manager_2.png" alt=""><br></p><h3 id="hb8ca9c2430">タグの設定</h3><p>左上の３点リーダから「Open Settings」をクリックし、設定の中のTagsで好きなタグを設定します。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/48a024bc6bcd4825985dbb684b77a860/vscode-project-manager_3.png" alt=""><br><br>プロジェクトを右クリック &gt; 「Edit Tags」を選択し、設定したいタグをチェックして「OK」 を押下します。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/fb4b8e6e650d4f58a0ae671ce5282c09/vscode-project-manager_4.png" alt=""><br><br>左上のタグのアイコンをクリックし、表示したいタグをチェックして「OK」を押下します。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/f7a0d528358b47a3b6df6cea35172a15/vscode-project-manager_5.png" alt=""><br><br>左上のタグの左にあるアイコンをクリックすると、タグ別でプロジェクトを表示できます。また、鉛筆アイコンをクリックするとjsonで設定を編集することもできます。<br><img src="https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/7dc077ee40fb432186a39f8c4413a8b6/vscode-project-manager_6.png" alt=""><br><br><br><br><br><br><br></p>',
                tag: ['VSCode'],
                image: {
                    url: 'https://images.microcms-assets.io/assets/fe77dc645a1f47da866aa45a3b14b5fb/757adec0ff4a4005b4ac5ab2b093132b/eyecatch_vscode.png',
                    height: 180,
                    width: 320,
                },
            },
        ];

        render(
            <AuthProvider>
                <Home blog={blog} />
            </AuthProvider>
        );
        expect(screen.getByText('Tukky Tech Blog')).toBeInTheDocument();
    });
});
