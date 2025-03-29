import styled from '@emotion/styled';
import SiteHead from '@/components/SiteHead';
import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';

import Logo from '@/static/images/company/logo.webp';
import { useDeviceType } from '@/hooks/useDeviceCheck';
import Header from '@/components/Header';

export default function CommonLayout(props: {
    title?: string;
    children: ReactNode;
    description?: string;
}) {
    const { title, children } = props;
    const { isDesktop } = useDeviceType();

    return (
        <>
            <SiteHead
                title={title}
                description={'메디컬 토탈 솔루션 R&D 기업'}
            />
            <StyledCommomWrapper>
                {isDesktop ? (
                    <StyledMainHeader>
                        <h1>
                            <Image
                                src={Logo}
                                alt="Monster & partners"
                                width={471}
                                height={35}
                            />
                        </h1>
                    </StyledMainHeader>
                ) : (
                    <Header />
                )}
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

const StyledMainHeader = styled.header`
    position: absolute;
    top: 40px;
    left: 80px;
    z-index: 10;

    @media screen and (max-width: 1023px) {
        display: none;
    }
`;
