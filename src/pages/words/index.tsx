import { useState } from 'react'; // 追加
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import itgirl from '../../images/itgirl.png';
import itgirl_description from '../../images/itgirl_description.png';
import axios from 'axios';

export default function Words({ words }: any) {
    const allWords = words;
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    // wordをクリックしたときのハンドラ
    const handleWordClick = (description: string) => {
        setScrollPosition(window.scrollY);
        setModalContent(description.replaceAll('\n', '<br>'));
        setShowModal(true);
    };

    // モーダルを閉じるときのハンドラ
    const handleCloseModal = () => {
        setShowModal(false);
        window.scrollTo(0, scrollPosition);
    };

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
                        <li
                            key={word.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300"
                        >
                            <a href="#" onClick={() => handleWordClick(word.description)}>
                                <div className="p-4">
                                    <div className="text-md font-semibold">{word.title}</div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={handleCloseModal}
                >
                    <div
                        className="w-full sm:w-3/4 bg-white mx-4 p-4 rounded-lg"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="w-full h-96 overflow-scroll sm:h-auto sm:flex">
                            <img className="h-40 rounded mb-2" src={itgirl_description.src} alt="ITガールのアイコン" />
                            <div className="px-4" dangerouslySetInnerHTML={{ __html: modalContent }} />
                        </div>
                    </div>
                </div>
            )}
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
