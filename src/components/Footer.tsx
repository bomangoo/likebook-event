import { StyledCommonSection } from '@/styles/components';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { familyCompany } from '@/contents/company';

export default function Footer() {
    const selectRef = useRef<HTMLDivElement>(null);

    const [showFamilySite, setShowFamilySite] = useState(false);

    const handleClickOutside = (event: any) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            setShowFamilySite(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, []);

    return (
        <StyledFooterSection>
            <div>
                <footer>
                    <StyledCompanyInfo>
                        <h2>(주)회사명</h2>
                        <dl>
                            <dt>Founder</dt>
                            <dd>홍길동</dd>
                            <br />
                            <dt>Tel</dt>
                            <dd>010-1234-5678</dd>
                            <br />
                            <dt>E-mail</dt>
                            <dd>help@example.com</dd>
                        </dl>
                        <p>©2025. Company Co., Ltd. All rights reserved.</p>
                        <p>
                            <Link href="/">개인정보처리방침</Link> |{' '}
                            <Link href="/">서비스이용약관</Link>
                        </p>
                    </StyledCompanyInfo>
                    <StyledFamilySiteWrapper
                        showFamilySite={showFamilySite}
                        ref={selectRef}
                    >
                        <button
                            onClick={() => setShowFamilySite(!showFamilySite)}
                            type="button"
                        >
                            <span>Family Site</span>
                            <span></span>
                        </button>
                        <div>
                            {familyCompany.map((company, index) => (
                                <Link
                                    href={company.url}
                                    target="_blank"
                                    key={index}
                                >
                                    {company.name}
                                </Link>
                            ))}
                        </div>
                    </StyledFamilySiteWrapper>
                    <StyledCopyRightMobile>
                        <p>
                            ©2025. Monster&Partners Co., Ltd. All rights
                            reserved.
                        </p>
                        <p>
                            <Link href="/">개인정보처리방침</Link> |{' '}
                            <Link href="/">서비스이용약관</Link>
                        </p>
                    </StyledCopyRightMobile>
                </footer>
            </div>
        </StyledFooterSection>
    );
}

const StyledFooterSection = styled(StyledCommonSection)`
    footer {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 1023px) {
        footer {
            flex-direction: column;
        }
    }
`;

const StyledCompanyInfo = styled.section`
    text-align: left;

    h2 {
        font-size: 18px;
        padding-bottom: 25px;
    }

    > dl {
        max-width: 440px;
        font-size: 14px;

        dt {
            display: inline-block;
            padding-right: 10px;
            font-weight: 600;
            color: #666;
        }
        dd {
            display: inline-block;
            color: #8d8d8d;
        }
    }

    > p {
        padding-top: 22px;
        font-size: 14px;
    }

    @media screen and (max-width: 1023px) {
        > img {
            margin-bottom: 40px;
        }

        h2 {
            font-size: 16px;
            font-weight: 600;
        }

        > dl {
            max-width: 100%;
            font-size: 12px;

            dt {
                padding-right: 6px;
                font-weight: 500;
            }
        }

        p {
            display: none;
        }
    }
`;

const StyledFamilySiteWrapper = styled.div<{ showFamilySite: boolean }>`
    position: relative;
    width: 290px;
    height: 100%;

    > button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 288px;
        height: 64px;
        padding: 20px;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 4px;
        z-index: 5;
        box-sizing: border-box;

        > span:last-of-type {
            display: inline-block;
            padding: 3px;
            border: 1px solid #fff;
            border-width: 0 1px 1px 0;
            transform: rotate(
                ${({ showFamilySite }) =>
                    showFamilySite ? '-135deg' : '45deg'}
            );
            transition: all 0.3s ease;
        }
    }

    > div {
        position: absolute;
        bottom: calc(100% + 12px);
        left: 0;
        width: 288px;
        height: 257px;
        overflow: hidden;
        max-height: ${({ showFamilySite }) => (showFamilySite ? '257px' : '0')};
        border: 1px solid #ddd;
        border-radius: 4px;
        opacity: ${({ showFamilySite }) => (showFamilySite ? '1' : '0')};
        transition:
            max-height 0.4s ease-in-out,
            opacity 0.3s 0.1s ease-in;
        z-index: 2;

        > a {
            display: block;
            padding: 10px 20px;
            text-align: left;
            font-size: 14px;
            background-color: #fff;

            &:hover {
                background-color: #f1f1f1;
            }

            &:first-of-type {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
            &:last-of-type {
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        margin: 40px 0;

        > button {
            width: 100%;
            height: 41px;
            background-color: #fff;
            border-color: #8d8d8d;
            color: #8d8d8d;

            > span:last-of-type {
                border-color: #8d8d8d;
            }
        }

        > div {
            width: 100%;
            border-color: #8d8d8d;

            > a {
                background-color: #fff;
                color: #8d8d8d;
            }
        }
    }
`;

const StyledCopyRightMobile = styled.div`
    display: none;

    @media screen and (max-width: 1023px) {
        display: block;

        p {
            text-align: left;
            font-size: 12px;
            color: #8d8d8d;

            &:nth-of-type(2) {
                margin-top: 25px;
            }
        }
    }
`;
