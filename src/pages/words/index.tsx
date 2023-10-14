// 画像サイズ → 640x400

import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';

type WordProps = {};

export default function Words({ words }: any) {
    return (
        <Container>
            <Header />
            <div id="words" className="mx-auto max-w-screen-xl py-5 lg:px-0">
                <ul className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-white"></ul>
            </div>
            <Footer />
        </Container>
    );
}

// export const getStaticProps = async () => {
//     const contents = await getAllLinks();

//     return {
//         props: {
//             links: contents,
//         },
//     };
// };
