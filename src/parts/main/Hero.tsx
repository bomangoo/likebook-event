import styled from '@emotion/styled';
import Image from 'next/image';
import { useDeviceType } from '@/hooks/useDeviceCheck';

import Hero from '@/static/images/company/hero.webp';
import HeroM from '@/static/images/company/hero-m.webp';

export default function MainHero() {
    const { isDesktop } = useDeviceType();

    return (
        <StyledHeroArea>
            <Image
                src={isDesktop ? Hero : HeroM}
                alt="hero image"
                fill
                priority
            />
            <div>
                <h2>웹사이트</h2>
                <p>예시 디스크립션</p>
            </div>
        </StyledHeroArea>
    );
}

const StyledHeroArea = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;

    > img {
        position: absolute;
        object-fit: cover;
        object-position: bottom;
    }

    > div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h2 {
            font-size: 60px;
        }

        p {
            padding-top: 20px;
            font-size: 24px;
            font-weight: 600;
        }

        @media screen and (max-width: 1023px) {
            h2 {
                font-size: 40px;
            }

            p {
                font-size: 20px;
                font-weight: 500;
                line-height: 1.4;
            }
        }
    }
`;
