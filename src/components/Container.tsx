import { ReactNode } from 'react';

import CommonHead from './CommonHead';

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return (
        <>
            <CommonHead />
            <div className="bg-gray-50">{children}</div>;
        </>
    );
};

export default Container;
