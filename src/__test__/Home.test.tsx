/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { AuthProvider } from '@/hooks/use-auth';

import Home from '../pages/index';

describe('Rendering', () => {
    it('Should render hello text', () => {
        render(
            <AuthProvider>
                <Home />
            </AuthProvider>
        );
        expect(screen.getByText('Tukky Tech Blog')).toBeInTheDocument();
    });
});
