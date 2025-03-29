import styled from '@emotion/styled';
import Header from '@/components/Header';
import SiteHead from '@/components/SiteHead';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';

export default function CommonLayout(props: {
    title?: string;
    description?: string;
    children: ReactNode;
}) {
    const { title, description, children } = props;

    return (
        <>
            <SiteHead title={title} description={description} />
            <StyledCommomWrapper>
                <Header />
                {children}
                <Footer />
            </StyledCommomWrapper>
        </>
    );
}

const StyledCommomWrapper = styled.main`
    position: relative;
    width: 100%;
    text-align: center;
`;
