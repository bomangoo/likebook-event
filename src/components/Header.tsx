import { useDeviceType } from '@/hooks/useDeviceCheck';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import Logo from '@/static/images/company/logo.png';

const menu = [
    {
        title: 'Home',
        pathname: '/',
    },
    {
        title: 'Culture',
        pathname: '/company',
    },
    {
        title: 'Recruit',
        pathname: '/company',
    },
    {
        title: 'Contact',
        pathname: '/company',
    },
];

export default function Header() {
    const { isDesktop } = useDeviceType();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    if (!isDesktop) {
        return (
            <StyledMobileHeaderWrapper>
                <Image src={Logo} alt="회사명" />
                <StyledHamburgerButton
                    type="button"
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    isOpen={isMobileNavOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </StyledHamburgerButton>
                <StyledMobileMenu isOpen={isMobileNavOpen}>
                    <nav>
                        {menu.map((item, index) => (
                            <StyledNavButton href={item.pathname} key={index}>
                                {item.title}
                            </StyledNavButton>
                        ))}
                    </nav>
                </StyledMobileMenu>
            </StyledMobileHeaderWrapper>
        );
    }

    return (
        <StyledHeaderWrapper>
            <nav>
                {menu.map((item, index) => (
                    <StyledNavButton href={item.pathname} key={index}>
                        {item.title}
                    </StyledNavButton>
                ))}
            </nav>
        </StyledHeaderWrapper>
    );
}

const StyledMobileHeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 14px 16px;
    z-index: 10;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(91, 91, 91, 0.4);
        z-index: -1;
        backdrop-filter: blur(5px);
    }

    > img {
        max-width: 30%;
        object-fit: contain;
    }
`;

const StyledHamburgerButton = styled.button<{ isOpen: boolean }>`
    position: relative;
    width: 28px;
    height: 21px;
    cursor: pointer;
    z-index: 50;

    > span {
        position: absolute;
        width: 100%;
        height: 3px;
        border-radius: 2px;
        background: ${({ isOpen }) => (isOpen ? '#000' : '#fff')};
        left: 0;

        &:nth-of-type(1) {
            top: 0;
            transform-origin: 15% 50%;
            transition: 0.3s;
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(45deg) translateX(10%)' : 'unset'};
        }

        &:nth-of-type(2) {
            top: calc(50% - 1px);
            opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        }

        &:nth-of-type(3) {
            bottom: 0;
            transform-origin: 15% 50%;
            transition: 0.3s;
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg) translateX(10%)' : 'unset'};
        }
    }
`;

const StyledMobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? 0 : '100%')};
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: #fff;
    transition: left 0.3s ease-in-out;

    > nav {
        display: flex;
        flex-direction: column;
        padding-top: 100px;

        > a {
            padding: 15px 0;
            color: #333;
            font-size: 20px;
        }
    }
`;

const StyledHeaderWrapper = styled.header`
    position: absolute;
    top: 90px;
    right: 120px;
    width: 100%;
    z-index: 10;

    > nav {
        display: flex;
        gap: 143px;
        justify-content: flex-end;
    }
`;

const StyledNavButton = styled(Link)`
    font-size: 16px;
    font-weight: bold;
`;
