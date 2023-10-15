// 画像サイズ → 640x400

import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import itgirl from '../../images/itgirl.png';
import axios from 'axios';

type WordProps = {};

export default function Words({ words }: any) {
    const allWords = words;
    console.log('allWords:', allWords);

    return (
        <Container>
            <Header />
            <div id="words" className="mb-4 mx-auto max-w-screen-xl lg:px-0">
                <div className="px-4 mb-4 w-full flex items-center gap-4 bg-cyan-50">
                    <img className="h-20 " src={itgirl.src} alt="ITガールのアイコン" />
                    <div className="text-2xl">ITアシスタントガールのIT用語解説</div>
                </div>
                <ul className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allWords.map((word: any) => (
                        <li key={word.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <a href={word.url} target="_blank" rel="noopener noreferrer">
                                <div className="p-4">
                                    <div className="text-xl font-semibold">{word.title}</div>
                                    <div className="text-sm">{word.description}</div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </Container>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_ITWORDS_APIENDPOINT || '');

    return {
        props: {
            words: JSON.parse(data.body),
        },
    };
};
