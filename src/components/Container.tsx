import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="bg-gray-50">{children}</div>;
};

export default Container;
